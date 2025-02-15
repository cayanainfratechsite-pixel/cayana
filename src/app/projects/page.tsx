"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBed,
  FaRulerCombined,
  FaLayerGroup,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Skyline Towers",
    location: "Off Kanakapura Road, Bangalore",
    price: "2,500,000",
    image: "/images/Projects/projects1.webp",
    type: "Apartment",
    bedrooms: "2,3 BHK",
    size: "1500 sqft",
    units: "120 Units",
  },
  {
    id: 2,
    name: "Sunset Villas",
    location: "Los Angeles, USA",
    price: "1,800,000",
    image: "/images/Projects/projects2.webp",
    type: "Villa",
    bedrooms: "2,3,4 BHK",
    size: "2000 sqft",
    units: "80 Units",
  },
  {
    id: 3,
    name: "Urban Residences",
    location: "Chicago, USA",
    price: "1,200,000",
    image: "/images/Projects/projects3.webp",
    type: "Apartment",
    bedrooms: "2 BHK",
    size: "1200 sqft",
    units: "150 Units",
  },
];

export default function ProjectsPage() {
  return (
    <section className="p-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-20">
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Featured Projects
      </motion.h1>

      <motion.p
        className="text-sm text-zinc-700 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our premium real estate projects, offering luxury living and
        modern designs.
      </motion.p>

      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/card{project.id}`}>
            <motion.div className="p-3 hover:bg-white hover:shadow-lg hover:rounded-sm border border-zinc-200 cursor-pointer transition-all duration-500 ease-in-out">
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-contain mx-auto"
              />
              <div>
                <h2 className="text-lg md:text-xl font-medium text-zinc-800 mt-4">
                  {project.name}
                </h2>
                <p className="text-sm text-zinc-500">{project.location}</p>
                <p className="text-sm sm:text-sm font-medium text-[#0553F1] mt-1"> <span className="font-bold"> INR. {" "}</span>
                  {project.price}/- ONWORDS
                </p>
                <hr className="my-3 border-zinc-300" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center border p-2 rounded">
                    <FaBuilding className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">Type</p>
                      <p className="text-sm font-medium text-zinc-900">{project.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center border p-2 rounded">
                    <FaBed className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">
                        Bedrooms
                      </p>
                      <p className="text-sm font-medium text-zinc-900">
                        {project.bedrooms}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center border p-2 rounded">
                    <FaRulerCombined className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">
                        Development Size
                      </p>
                      <p className="text-sm font-medium text-zinc-900">{project.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center border p-2 rounded">
                    <FaLayerGroup className="text-zinc-500 mr-2" />
                    <div>
                      <p className="text-sm font-light text-zinc-700">
                        Total Units
                      </p>
                      <p className="text-sm font-medium text-zinc-900">{project.units}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
