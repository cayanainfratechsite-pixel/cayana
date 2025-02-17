"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Underline from "@/components/Underline";
import { useState, useEffect, useRef } from "react";

const CareerPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleApplyClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const heroImage = isMobile
    ? "/images/Career/TOP_mobile.png"
    : "/images/Career/TOP.webp";

  return (
    <div className="bg-gray-100">
      <section className="w-full">
        <div className="relative w-full">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={isMobile ? 800 : 1900}
            height={isMobile ? 1200 : 800}
            layout="responsive"
            className="w-full"
            quality={90}
          />

          {/* Dark overlay over the image */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Black background container at the bottom of the image */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-black/60 
                        px-4 py-1 md:px-8 md:py-5 mx-2 md:mx-10 lg:mx-28 
                        mb-2 md:mb-5 rounded-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaQuoteLeft className="w-5 h-5 md:w-5 md:h-5 lg:w-8 lg:h-8 text-zinc-100 md:mb-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="m-1 font-serif mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-100"
            >
              Join our team and be part of a culture driven by passion, innovation, and excellence.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase"
          >
            Join Our Team
          </motion.h2>

          <Underline />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-700 mb-6 mx-6"
          >
            At Cayana Infratech, we don’t just build properties—we build
            careers.
            <br />
            Our team-driven culture encourages innovation, learning, and
            professional growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-left inline-block w-full"
          >
            <p className="text-center text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Why work with us?
            </p>
            <Underline />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white shadow-lg rounded-xl p-6 mx-5 flex flex-col items-center justify-center transition transform duration-300"
              >
                {/* Number circle positioned at top left */}
                <div className="absolute top-0 left-9 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <p className="text-gray-700 text-center">
                  Positive &amp; Collaborative Work Culture
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white shadow-lg rounded-xl p-6 mx-5 flex flex-col items-center justify-center transition transform duration-300"
              >
                <div className="absolute top-0 left-9 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <p className="text-gray-700 text-center">
                  Growth &amp; Learning Opportunities
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white shadow-lg rounded-xl p-6 mx-5 flex flex-col items-center justify-center transition transform duration-300"
              >
                <div className="absolute top-0 left-9 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <p className="text-gray-700 text-center">
                  Competitive Salaries &amp; Employee Benefits
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className=" mx-auto space-y-16">
          {/* Work Culture Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 items-center bg-white p-3  sm:p-16 mx-2 "
          >
            {/* Content on Left */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase mb-6">
                Work Culture
              </h3>
              <p className="text-gray-700 mb-4">
                A thriving workplace fosters innovation, collaboration, and
                excellence. Employees bring in new ideas and develop better
                solutions.
              </p>
              <p className="text-gray-700">
                We ensure an inclusive work environment with team building &amp;
                open communication. Employees benefit from a harassment-free
                workplace, work-life integration, and safety protocols.
              </p>
            </div>
            {/* Image on Right */}
            <div>
              <Image
                src="/images/Career/workCulture.webp"
                alt="Work Culture"
                height={335}
                width={828}
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
          </motion.div>

          {/* Career Growth Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 items-center bg-white p-3  sm:p-16 mx-2 "
          >
            {/* Image on Left */}
            <div className="md:order-1">
              <Image
                src="/images/Career/CareerImage.webp"
                alt="Career Growth at Cayana"
                height={335}
                width={828}
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
            {/* Content on Right */}
            <div className="md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase mb-6">
                Career Growth at Cayana
              </h3>
              <p className="text-gray-700">
                At Cayana, we believe that our employees are the architects of
                our success. Your journey with us isn’t just about a job—it’s
                about continuous learning, innovation, and limitless
                possibilities. Through continuous learning, mentorship, and
                opportunities to take on new challenges, we help our team unlock
                their full potential. Whether you're stepping into a leadership
                role, mastering a new skill, or pioneering groundbreaking
                projects, we are committed to your success. Because when our
                people grow, our company grows—and together, we build a future
                of endless possibilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-gray-100">
        <div className="mx-4 md:mx-20">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase text-center">
            Job Openings
          </h2>
          <Underline />
          <div className="">
            <table className="min-w-full bg-white">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 md:px-6 text-left font-medium text-sm">
                    Job Title
                  </th>
                  <th className="py-3 px-4 md:px-6 text-left font-medium text-sm">
                    Responsibilities &amp; Requirements
                  </th>
                  <th className="py-3 px-4 md:px-6 text-center font-medium text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Sales Manager Row */}
                <motion.tr
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="border-b hover:bg-gray-200 transition-colors"
                >
                  <td className="py-4 px-4 md:px-6">
                    <h3 className="text-xs sm:text-base text-zinc-900 font-medium">
                      Sales Manager
                    </h3>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-zinc-900 text-xs sm:text-base">
                    <p>
                      - Develop and execute sales strategies.
                      <br />- Lead and motivate the sales team.
                      <br />- Build strong customer relationships.
                      <br />- Proven track record in sales management.
                    </p>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center">
                    <a
                      href="#apply-form"
                      onClick={handleApplyClick}
                      className="inline-block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition text-xs sm:text-sm"
                    >
                      Apply Now
                    </a>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal Popup for Application Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg relative w-full max-w-sm sm:max-w-2xl mx-4"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase text-center">
              Apply Now
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full border border-gray-300 p-3 rounded"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-3 rounded"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 p-3 rounded"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="w-full border border-gray-300 p-3 rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray-300 p-3 rounded"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
