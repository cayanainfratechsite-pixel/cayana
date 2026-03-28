"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Image from "next/image";
import {
  FaBuilding,
  FaBed,
  FaRulerCombined,
  FaLayerGroup,
} from "react-icons/fa";
import PaginationComponent from "../Pagination";
import { fetchProjects } from "@/api/projects/page";
import { useParams } from "next/navigation";
import AddTaskSharpIcon from "@mui/icons-material/AddTaskSharp";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

interface Project {
  _id: string;
  name: string;
  cardImage: string;
  locationName: string;
  basePrice: string;
  type: string;
  bedRooms: number;
  size: string;
  units: string;
  status?: string;
}

const FeaturedProjects: React.FC = () => {
  const { id } = useParams();

  console.log(id);

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchAllProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchProjects(page);
        
        // Handle both nested and direct data structures
        const data = response.data || response;
        const isSuccess = response && (response.data?.success === 0 || response.data?.success === 1 || response.success === 0 || response.success === 1);

        if (isSuccess && data.result?.projects) {
          setProjects(data.result.projects);
          setTotalPages(data.result.totalPages || 1);
        } else if (!isSuccess) {
          setError(data?.message || "Failed to fetch projects");
        } else {
          setError("Invalid response format from server");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Error fetching projects: " + (err instanceof Error ? err.message : "Unexpected error"));
      } finally {
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  // At the top of your FeaturedProjects component, add:
  // const getStatusClasses = (status: string): string => {
  //   switch (status.toLowerCase()) {
  //     case "completed":
  //       return "text-yellow-700 bg-yellow-200";
  //     case "ongoing":
  //       return "text-green-700 bg-green-200";
  //     default:
  //       return "text-red-700 bg-red-200";
  //   }
  // };

  const getStatusClasses = (status: string): string => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-yellow-700 bg-yellow-200";
      case "ongoing":
        return "text-green-700 bg-green-200";
      default:
        return "text-red-700 bg-red-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <AddTaskSharpIcon fontSize="medium" />;
      case "ongoing":
        return <AutorenewIcon fontSize="medium" />;
      case "upcoming":
        return <PendingActionsIcon fontSize="medium" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <section className="p-8 mx-1 sm:mx-8 md:mx-16 lg:mx-24 mt-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-lg text-zinc-600">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-8 mx-1 sm:mx-8 md:mx-16 lg:mx-24 mt-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-8 mx-1 sm:mx-8 md:mx-16 lg:mx-24 mt-20">
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Featured Projects
      </motion.h1>
      <motion.p
        className="text-xs sm:text-sm text-zinc-700 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our affordable premium real estate projects, offering luxury
        living and modern designs.
      </motion.p>
      <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((project) => (
          <Link key={project._id} href={`/projects/${project._id}`}>
            <motion.div className="p-3 hover:bg-white hover:shadow-lg hover:rounded-sm border border-zinc-200 cursor-pointer transition-all duration-500 ease-in-out">
              <div className="relative w-full h-[300px]">
                <Image
                  src={project.cardImage}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* <Image
                src={project.cardImage}
                alt={project.name || "Project Image"}
                width={400}
                height={300}
                className="w-full h-auto object-contain mx-auto"
              /> */}

              <div>
                <div className="flex items-center justify-between mt-4">
                  <h2 className="text-lg md:text-xl font-medium text-zinc-800">
                    {project.name.toUpperCase()}
                  </h2>
                  {project.status && (
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${getStatusClasses(
                        project.status,
                      )}`}
                    >
                      {getStatusIcon(project.status)}
                      <span>{project.status}</span>
                    </span>
                  )}
                </div>

                <p className="text-sm text-zinc-500">{project.locationName}</p>
                <p className="text-sm font-medium text-[#0553F1] mt-1">
                  <span className="font-bold">RERA NO: </span>{" "}
                  {project.basePrice}
                </p>
                <hr className="my-3 border-zinc-300" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center border p-2 rounded">
                    <FaBuilding className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">Type</p>
                      <p className="text-sm font-medium text-zinc-900">
                        {project.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center border p-2 rounded">
                    <FaBed className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">Price</p>
                      <p className="text-sm font-medium text-zinc-900">
                        {project.bedRooms > 0
                          ? "INR " + project.bedRooms + "/- ONWARDS"
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center border p-2 rounded">
                    <FaRulerCombined className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">
                        Category
                      </p>
                      <p className="text-sm font-medium text-zinc-900">
                        {project.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center border p-2 rounded">
                    <FaLayerGroup className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">
                        Total Units
                      </p>
                      <p className="text-sm font-medium text-zinc-900">
                        {project.units}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      {/* Pagination Component */}
      <PaginationComponent
        count={totalPages}
        page={page}
        onChange={handlePageChange}
      />
    </section>
  );
};

export default FeaturedProjects;
