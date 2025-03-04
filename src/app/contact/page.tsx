"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

import { submitContactEnquiry } from "@/api/contact/page";

export default function ContactPage() {
  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  // Responsive state for hero image
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const heroImage = isMobile
    ? "/images/Contact/TOP_mobile.webp"
    : "/images/Contact/TOP.webp";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      category: "general",
      firstName,
      lastName,
      email,
      mobile,
      city,
      message,
    };

    try {
      const response = await submitContactEnquiry(data);
      if (response && response.data) {
        console.log("Response:", response.data);
      }
      alert("Your enquiry has been submitted successfully.");
      // Clear form fields
      setFirstName("");
      setLastName("");
      setMobile("");
      setEmail("");
      setCity("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert(
        "There was an error submitting your enquiry. Please try again later."
      );
    }
  };

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
          <div className="absolute inset-0 bg-black opacity-30"></div>

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
              Join our team and be part of a culture driven by passion,
              innovation, and excellence.
            </motion.p>
          </div>
        </div>
      </section>

      <motion.section
        className="mx-5 lg:mx-16 xl:mx-24 p-4 md:p-8 mt-20 text-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-lg sm:text-xl md:text-xl font-medium uppercase text-zinc-900 mb-10">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Contact Form */}
          <motion.div
            className="md:w-3/6 xl:w-2/5 bg-white p-6 rounded-lg shadow-md"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-9 flex flex-col">
              {/* Name Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="relative z-0 w-full group mt-6">
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder=" "
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative z-0 w-full group mt-6">
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    placeholder=" " 
                    onChange={(e) => setLastName(e.target.value)}
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

              {/* Mobile Number Field */}
              <div className="relative z-0 w-full group">
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder=" "
                  className="block py-2.5 px-0 mt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="mobile"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mobile Number
                </label>
              </div>

              {/* Email Field */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="block py-2.5 px-0 mt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>

              {/* City Field */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder=" "
                  className="block py-2.5 px-0 mt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="city"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City
                </label>
              </div>

              {/* Message Field */}
              <div className="relative z-0 w-full group">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=" "
                  rows={4}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-sm text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>


              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-colors"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Reach Us, Cards, and Map */}
          <motion.div
            className="md:w-3/6 xl:w-3/5 flex flex-col space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Reach Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-sm sm:text-lg md:text-xl font-medium uppercase text-zinc-900 mb-4">
                Reach Us
              </h2>
              <p className="text-gray-700">
                Feel free to reach out to us through any of the following
                methods.
              </p>
            </motion.div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center mb-2">
                  <MdPhone className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="font-bold">Phone</span>
                </div>
                <p className="text-gray-600">+123 456 7890</p>
              </motion.div>
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center mb-2">
                  <MdEmail className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="font-bold">Email</span>
                </div>
                <p className="text-gray-600">email@example.com</p>
              </motion.div>
              {/* Address Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center mb-2">
                  <MdLocationOn className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="font-bold">Address</span>
                </div>
                <p className="text-gray-600">Bhubaneswar, Odisha, India</p>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-sm sm:text-lg md:text-xl font-medium uppercase text-zinc-900 my-4">
                Our Location
              </h2>
              <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.499854450253!2d85.81457611511592!3d20.296059186883825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190f31747e511b%3A0x8e7f7e6d50b8c3a3!2sBhubaneswar%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sus!4v1630311156822!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
