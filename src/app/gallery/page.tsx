"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
  {
    id: 4,
    name: "Modern Estates",
    location: "New York, USA",
    price: "3,000,000",
    image: "/images/Projects/projects2.webp",
    type: "Condo",
    bedrooms: "3 BHK",
    size: "1800 sqft",
    units: "90 Units",
  },
  {
    id: 5,
    name: "Garden Homes",
    location: "Mumbai, India",
    price: "950,000",
    image: "/images/Projects/projects1.webp",
    type: "Villa",
    bedrooms: "3 BHK",
    size: "2200 sqft",
    units: "60 Units",
  },
];

export default function GallerySection() {
  return (
    <section className="p-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-20">
      {/* Heading & Subheading */}
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Gallery
      </motion.h1>
      <motion.p
        className="text-sm text-zinc-700 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our curated collection of stunning visuals and designs.
      </motion.p>

      {/* Gallery Cards */}
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          // <Link key={project.id} href={`/gallery/card${project.id}`}>
            <motion.div className="p-3 hover:bg-white hover:shadow-lg hover:rounded-sm border border-zinc-200 cursor-pointer transition-all duration-500 ease-in-out">
              {/* Image */}
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-auto object-contain mx-auto"
              />
            </motion.div>
          // </Link>
        ))}
      </div>
    </section>
  );
}
