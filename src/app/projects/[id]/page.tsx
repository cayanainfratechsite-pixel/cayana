"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Underline from "@/components/Underline";
import ProjectSection from "@/components/ProjectsPage/ProjectSection";
import Gallery from "@/components/ProjectsPage/Gallery";
import { FaDownload } from "react-icons/fa";
import GetInTouch from "@/components/ProjectsPage/GetInTouch";
import StickyEnquiry from "@/components/ProjectsPage/StickyEnquiry";

const Page: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path/to/your/file.pdf";
    link.download = "file.pdf";
    link.click();
  };

  const project = {
    name: "Skyline Towers",
    location: "BBSR, ODISHA, INDIA",
    price: "2,500,000",
    heroImage: "/images/Projects/cover.webp",
    secondImage: "/images/Projects/floor.png",
    subContent: `This project is a testament to modern architecture. It offers luxurious living spaces.
Experience comfort and convenience like never before.`,
    longDescription:
      "Skyline Towers is a remarkable blend of elegance, modern design, and sustainable practices. It offers state-of-the-art facilities, spacious living areas, and a community-centric environment. Residents enjoy panoramic views, innovative amenities, and a peaceful urban retreat amidst the hustle of city life. Every detail has been meticulously planned to ensure maximum comfort and convenience. From energy-efficient designs to smart home integrations, this project sets new benchmarks in contemporary living. The strategic location in Bhubaneswar ensures excellent connectivity and access to key amenities. Embrace a lifestyle of luxury, comfort, and sophistication at Skyline Towers.",
  };

  return (
    <section className="relative">
      <div className="relative w-full h-[70vh]">
        <Image
          src={project.heroImage}
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
            {project.location}
          </motion.p>
          <div className="flex gap-3 md:gap-8 flex-wrap">
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              INR {project.price}/- onwards
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
              3+ Utility & 4+ Utility BHK
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
              2,3,4 BHK
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
          <Gallery />
        </div>

        <div>
          <ProjectSection />
        </div>

        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className=" text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Details
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.longDescription}</p>
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

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3455598694056!2d85.829664!3d20.296059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b8ec24b2f07%3A0x7f35c5b6a5a45f2a!2sBhubaneswar%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            className="w-full h-[400px] border-0 rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Floor Structure
            </h1>
            <Underline />
          </div>
        </div>

        {/* Secondary Image */}
        <div className="relative w-full mb-12">
          <Image
            src={project.secondImage}
            alt="Hero Image"
            width={1900}
            height={800}
            layout="responsive"
            className="w-full"
            // quality={1000}
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
        <GetInTouch />
      </div>

      <div>
        <StickyEnquiry />
      </div>
    </section>
  );
};

export default Page;
