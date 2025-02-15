"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Underline from "@/components/Underline";
import ProjectSection from "@/components/ProjectsPage/ProjectSection";
import Gallery from "@/components/ProjectsPage/Gallery";
import { FaDownload } from "react-icons/fa";
import GetInTouch from "@/components/ProjectsPage/GetInTouch";

const Page: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path/to/your/file.pdf"; // Replace with the actual path to your PDF file
    link.download = "file.pdf"; // Replace with the desired file name
    link.click();
  };

  const project = {
    name: "Skyline Towers",
    location: "BBSR, ODISHA, INDIA",
    price: "2,500,000",
    heroImage: "/images/AboutPage/2.webp",
    secondImage: "/images/Blog/blog_bg.webp",
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
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Black background container at the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-4 py-8 mx-auto max-w-7xl mb-10 rounded-lg">
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
            <p className="text-zinc-900">{project.subContent}</p>
          </div>
        </div>

        {/* Secondary Image */}
        <div className="relative w-full">
          <Image
            src={project.secondImage}
            alt="Hero Image"
            width={1900}
            height={800}
            layout="responsive"
            className="w-full"
            quality={90}
          />
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
      </div>

      <div>
        <ProjectSection />
        <Gallery />
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
          Download
        </h1>
        <Underline />
        <div className="flex justify-center">
          <button
        onClick={handleDownload}
        className="flex items-center justify-center text-[#0553F1] hover:text-zinc-100 px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
        <FaDownload className="mr-2" />
        Download PDF
          </button>
        </div>
      </div>

      <div>
        <GetInTouch />
      </div>

      {/* Sticky ENQUIRY Button */}
      <motion.button
        className="fixed -right-20 top-1/2 flex items-center justify-center bg-white border border-[#27262e] rounded-t-[20px] rounded-b-none cursor-pointer h-[40px] lg:h-[50px] w-[180px] lg:w-[200px] -translate-y-1/2 -rotate-90 transition-all duration-800 ease-[cubic-bezier(.45,.05,.55,.95)] z-50"
        onClick={() => setIsFormOpen(true)}
      >
        <span className="text-sm lg:text-lg font-medium text-zinc-950">
          ENQUIRY
        </span>
      </motion.button>

      {isFormOpen && (
        <motion.div
          className="fixed right-0 bg-zinc-50  p-6 shadow-xl w-[420px] h-[67vh] z-50 rounded-sm"
          // Position the form so that its bottom aligns with the top edge of the enquiry button.
          style={{ top: "calc((100% - 18rem) - 50vh)" }}
          // Animate in from the bottom-right (x and y offsets)
          initial={{ opacity: 0, x: 3000, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsFormOpen(false)}
          >
            &#10005;
          </button>
          <h2 className="text-xl font-medium uppercase text-center mb-4 text-zinc-950">
            Enquiry Form
          </h2>
          <form className="space-y-4 overflow-y-auto h-full">
            <div className="grid grid-cols-2 gap-4 my-2">
              {/* First Name */}
              <div className="relative z-0 w-full group mt-3">
                <input
                  type="text"
                  id="firstName"
                  placeholder=" " /* required for peer selectors */
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              {/* Last Name */}
              <div className="relative z-0 w-full group mt-3">
                <input
                  type="text"
                  id="lastName"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full group">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email ID
              </label>
            </div>

            {/* Mobile */}
            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="mobile"
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
                required
              />
              <label
                htmlFor="mobile"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile No
              </label>
            </div>

            {/* Date */}
            <div className="relative z-0 w-full group">
              <input
                type="date"
                id="date"
                placeholder=" " /* Although date inputs don’t display a placeholder, the attribute is needed for consistency */
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
                required
              />
              <label
                htmlFor="date"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
            </div>

            {/* Select Time */}
            <div className="relative z-0 w-full group">
              <select
                id="time"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer my-8"
                required
              >
                {/* An empty default option to trigger the floating label */}
                <option value="" disabled hidden></option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
              </select>
              <label
                htmlFor="time"
                className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Select Time
              </label>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-sm text-zinc-900">
                Yes, I would like to receive updates & promotions from{" "}
                <span className="font-bold text-xs">
                  {" "}
                  CAYANA REDEFINING TRUST{" "}
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      )}
    </section>
  );
};

export default Page;
