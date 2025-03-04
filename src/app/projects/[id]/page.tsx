"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Underline from "@/components/Underline";
import ProjectSection from "@/components/ProjectsPage/ProjectSection";
import Gallery from "@/components/ProjectsPage/Gallery";
import { FaDownload } from "react-icons/fa";
import GetInTouch from "@/components/ProjectsPage/GetInTouch";
import StickyEnquiry from "@/components/ProjectsPage/StickyEnquiry";
import { useParams, useRouter } from "next/navigation";

const Page: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.cayana.co.in/api/v1/project/${id}`)
      .then((response) => {
        if (response.data.success === 0) {
          setProject(response.data.result);
        }
      })
      .catch((error) => console.error("Error fetching project:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch(project.brochureURL);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  if (!project) {
    return <div className="text-center py-10 text-xl">Project not found</div>;
  }

  return (
    <section className="relative">
      <div className="relative w-full h-[70vh]">
        <Image
          src={project.coverImage}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Dark overlay over the image */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Black background container at the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 mx-3 px-4 py-8 sm:mx-auto max-w-7xl mb-10 rounded-lg">
          <motion.h1
            className="text-xl text-zinc-100 sm:text-2xl uppercase font-bold mb-2 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-xl mb-2 text-zinc-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.locationName}
          </motion.p>
          <div className="flex gap-3 md:gap-8 flex-wrap">
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              INR {project.basePrice}/- onwards
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Type: {project.type}
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Size: {project.size} Sq. ft.
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.bedRooms} BHK
            </motion.p>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-28">
        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Overview
            </h1>
            <Underline />
            <p className=" text-zinc-900">{project.subContent}</p>
          </div>
        </div>

        <div>
          <Gallery images={project.gallery} />
        </div>

        <div>
          <ProjectSection amenities={project.amenities} />
        </div>

        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className=" text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Details
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.details}</p>
          </div>
        </div>

        {/* Map Section: Location set to BBSR, ODISHA, INDIA */}
        <div className="py-8 px-4 sm:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Location
            </h1>
            <Underline />
          </div>

          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg shadow-lg border border-gray-300">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: project.locationEmbedURL }}
            ></div>
          </div>
        </div>

        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Floor Structure
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.overview}</p>
          </div>
        </div>

        {/* Secondary Image */}
        <div className="relative w-full mb-12">
          <Image
            src={project.overViewImage}
            alt="Hero Image"
            width={1900}
            height={800}
            layout="responsive"
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
          Download Brochure
        </h1>
        <Underline />
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center text-[#0553F1] hover:text-zinc-100 px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            <FaDownload className="mr-2" />
            Download
          </button>
        </div>
      </div>

      <div>
        <GetInTouch projectId={id as string} />
      </div>

      <div>
        <StickyEnquiry projectId={id as string} />
      </div>
    </section>
  );
};

export default Page;
