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
  // This state will determine if the screen is mobile or not
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
            className="right-0 bottom-0 left-0 absolute bg-black/60 mx-2 md:mx-10 lg:mx-28 mb-2 md:mb-5 px-4 md:px-8 py-1 md:py-5 rounded-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaQuoteLeft className="md:mb-4 w-5 md:w-5 lg:w-8 h-5 md:h-5 lg:h-8 text-zinc-100" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="m-1 mx-auto font-serif text-zinc-100 text-base sm:text-lg md:text-xl lg:text-2xl text-center"
            >
              Join our team and be a part of a culture driven by passion,
              innovation, and excellence.
            </motion.p>
          </div>
        </div>
      </section>

      <motion.section
        className="mx-5 lg:mx-16 xl:mx-24 mt-20 p-4 md:p-8 text-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-10 font-medium text-zinc-900 text-lg sm:text-xl md:text-xl uppercase">
          Contact Us
        </h1>
        <div className="flex md:flex-row flex-col gap-12">
          {/* Left Side: Contact Form */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg md:w-3/6 xl:w-2/5"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-9">
              {/* Name Fields */}
              <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
                {/* First Name */}
                
                <div className="group z-0 relative mt-6 w-full">



                  <input
                    type="text"
                    id="firstName"

                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder=" "
                    className="peer block bg-transparent px-0 py-2.5 border-0 border-zinc-700 focus:border-blue-600 border-b-2 focus:outline-none focus:ring-0 w-full text-gray-900 text-sm appearance-none"
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className="top-3 -z-10 absolute text-zinc-900 text-sm scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 duration-300 transform"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="group z-0 relative mt-6 w-full">
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    placeholder=" "
                    onChange={(e) => setLastName(e.target.value)}
                    className="peer block bg-transparent px-0 py-2.5 border-0 border-zinc-700 focus:border-blue-600 border-b-2 focus:outline-none focus:ring-0 w-full text-gray-900 text-sm appearance-none"
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className="top-3 -z-10 absolute text-zinc-900 text-sm scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 duration-300 transform"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Mobile Number Field */}
              <div className="group z-0 relative w-full">
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder=" "
                  className="peer block bg-transparent mt-5 px-0 py-2.5 border-0 border-zinc-700 focus:border-blue-600 border-b-2 focus:outline-none focus:ring-0 w-full text-gray-900 text-sm appearance-none"
                  required
                />
                <label
                  htmlFor="mobile"
                  className="top-3 -z-10 absolute text-zinc-900 text-sm scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 duration-300 transform"
                >
                  Mobile Number
                </label>
              </div>

              {/* Email Field */}
              <div className="group z-0 relative w-full">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="peer block bg-transparent mt-5 px-0 py-2.5 border-0 border-zinc-700 focus:border-blue-600 border-b-2 focus:outline-none focus:ring-0 w-full text-gray-900 text-sm appearance-none"
                  required
                />
                <label
                  htmlFor="email"
                  className="top-3 -z-10 absolute text-zinc-900 text-sm scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 duration-300 transform"
                >
                  Email
                </label>
              </div>

              {/* City Field */}
              <div className="group z-0 relative w-full">
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder=" "
                  className="peer block bg-transparent mt-5 px-0 py-2.5 border-0 border-zinc-700 focus:border-blue-600 border-b-2 focus:outline-none focus:ring-0 w-full text-gray-900 text-sm appearance-none"
                  required
                />
                <label
                  htmlFor="city"
                  className="top-3 -z-10 absolute text-zinc-900 text-sm scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 duration-300 transform"
                >
                  City
                </label>
              </div>

              {/* Message Field */}
              <div className="group z-0 relative w-full">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=" "
                  rows={4}
                  className="peer block bg-transparent px-0 py-2.5 border-0 border-zinc-700 focus:border-blue-600 border-b-2 focus:outline-none focus:ring-0 w-full text-gray-900 text-sm appearance-none resize-none"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="top-3 -z-10 absolute text-zinc-900 text-sm scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 duration-300 transform"
                >
                  Message
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-500 hover:bg-blue-600 py-2 rounded w-full font-semibold text-white transition-colors"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Reach Us, Cards, and Map */}
          <motion.div
            className="flex flex-col space-y-8 md:w-3/6 xl:w-3/5"
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
              <h2 className="mb-4 font-medium text-zinc-900 text-sm sm:text-lg md:text-xl uppercase">
                Reach Us
              </h2>
              <p className="text-gray-700">
                Feel free to reach out to us through any of the following
                methods.
              </p>
            </motion.div>

            {/* Cards Section */}
            <div className="gap-6 grid grid-cols-1 xl:grid-cols-3">
              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <MdPhone className="mr-2 w-6 h-6 text-blue-500" />
                  <span className="font-bold">Phone</span>
                </div>
                <a 
                  href="tel:+918908012233"
                  className="text-gray-600 hover:text-blue-500 hover:underline transition-colors cursor-pointer"
                >
                  +91 890-801-2233
                </a>
              </motion.div>
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <MdEmail className="mr-2 w-6 h-6 text-blue-500" />
                  <span className="font-bold">Email</span>
                </div>
                <a 
                  href="mailto:support@cayana.co.in"
                  className="text-gray-600 hover:text-blue-500 hover:underline transition-colors cursor-pointer"
                >
                  support@cayana.co.in
                </a>
              </motion.div>
              {/* Address Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <MdLocationOn className="mr-2 w-6 h-6 text-blue-500" />
                  <span className="font-bold">Address</span>
                </div>
                <p className="text-gray-600 text-sm">
                  N1/187, IRC Village, Nayapalli, Bhubaneswar, Odisha -15
                </p>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="my-4 font-medium text-zinc-900 text-sm sm:text-lg md:text-xl uppercase">
                Our Location
              </h2>
              <div className="shadow-md rounded-lg w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2636856106005!2d85.80419907599952!3d20.28934988118133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907ed44015555%3A0xdb602bbf3b479019!2sCayana%20Infratech%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1741291386582!5m2!1sen!2sin"
                  width="600"
                  height="450"
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
