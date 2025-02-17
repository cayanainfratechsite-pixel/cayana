"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showMenuSidebar, setShowMenuSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for detecting clicks outside of the call popup
  const callButtonRef = useRef<HTMLDivElement>(null);
  const callPopupRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Close call popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        callPopupRef.current &&
        !callPopupRef.current.contains(event.target as Node) &&
        callButtonRef.current &&
        !callButtonRef.current.contains(event.target as Node)
      ) {
        setShowCallPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll events to hide/show the navbar and activate the blur background
  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when scrolling down (past 100px) and show when scrolling up
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;

      // Activate the blur background when scrolled (even 1px)
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the current path to activate the current tab
  const pathname = usePathname();

  // Framer Motion variants for the sidebar menu items
  const sidebarVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Top Navbar with Conditional Blur Background */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <Link href="/" className="flex items-center">
            <Image
              src="/images/CAYANA.png"
              alt="Logo"
              width={1000} 
              height={200} 
              className="w-36 sm:w-40 md:w-48 lg:w-52 xl:w-56 h-auto" 
            />
          </Link>

          {/* Center: Navigation Items */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {/* OUR PROJECTS Link (hidden on mobile) */}
            <Link
              href="/projects"
              className="hidden md:block text-white text-xl font-medium hover:text-gray-300 transition-colors"
            >
              OUR PROJECTS
            </Link>

            {/* Call Button with Popup */}
            <div ref={callButtonRef} className="relative">
              <button
                onClick={() => setShowCallPopup((prev) => !prev)}
                className="focus:outline-none"
              >
                <div className="bg-black/30 shadow-lg rounded-full p-2 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-white h-4 w-4" />
                </div>
              </button>

              <AnimatePresence>
                {showCallPopup && (
                  <motion.div
                    ref={callPopupRef}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute right-0 mt-3 w-80 bg-black/30 ${
                      !isScrolled ? "backdrop-blur-md" : ""
                    } border border-white/20 shadow-xl rounded-xl p-4 z-50`}
                  >
                    {/* Phone Section */}
                    <div className="flex items-center space-x-3 border-b border-gray-200 pb-2 mb-2">
                      <FaPhoneAlt className="text-purple-600 h-4 w-4" />
                      <p className="text-zinc-100 font-semibold">
                        890-801-2233
                      </p>
                    </div>

                    {/* Location Section */}
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-red-500 h-5 w-5 mt-1" />
                      <p className="text-zinc-100 text-sm leading-tight">
                        N1/187, IRC Village, Nayapalli, Bhubaneswar, Odisha -15
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Menu Button (Sidebar Trigger) */}
            <button
              onClick={() => setShowMenuSidebar(true)}
              className="focus:outline-none"
            >
              <div className="rounded-full hover:bg-black/20 transition-colors p-2 flex items-center justify-center">
                <FaBars className="text-white h-6 w-6" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {showMenuSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full bg-black bg-opacity-65 w-full sm:w-1/4 z-50 flex flex-col justify-between"
          >
            <div>
              <div className="p-4 flex justify-normal gap-2 items-center border-b border-gray-700">
                {/* Close Button */}
                <button
                  onClick={() => setShowMenuSidebar(false)}
                  className="focus:outline-none"
                >
                  <FaTimes className="text-white h-6 w-6" />
                </button>
                <div className="flex items-center">
                  <h1 className="text-zinc-100 text-xl font-medium uppercase">
                    Close
                  </h1>
                </div>
              </div>
              <motion.ul
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                className="p-4 space-y-4"
              >
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/"
                        ? "text-zinc-100"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    HOME
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/about"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/about"
                        ? "text-zinc-50"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    ABOUT US
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/projects"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/projects"
                        ? "text-zinc-100"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    PROJECTS
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/blogs"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/blogs"
                        ? "text-zinc-100"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    BLOGS
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/gallery"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/gallery"
                        ? "text-zinc-100"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    GALLERY
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/careers"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/careers"
                        ? "text-zinc-100"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    CAREERS
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    href="/contact"
                    className={`block text-lg font-medium pb-3 transition-colors ${
                      pathname === "/contact"
                        ? "text-zinc-100"
                        : "text-white hover:text-zinc-400"
                    }`}
                    onClick={() => setShowMenuSidebar(false)}
                  >
                    CONTACT US
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
            {/* Bottom Section with Gradient Background */}
            <div className="border-t border-gray-700 bg-gradient-to-b from-black to-transparent">
              {/* Locations and Contact Numbers */}
              {/* <div className="p-4 flex flex-col space-y-4 mb-4">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-white h-4 w-4" />
                    <span className="text-white text-xs font-bold">
                      N1/187, IRC Village, Nayapalli, Bhubaneswar, Odisha -15
                    </span>
                  </div>
                  <span className="text-white text-xs font-bold ml-6 mt-3">
                    890-801-2233
                  </span>
                </div>
              </div> */}
              {/* Follow Us Title and Social Icons */}
              <div className="p-4">
                {/* <p className="text-white text-xs font-bold mb-2">Follow Us :</p> */}
                <div className="flex space-x-9">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white h-6 w-6 hover:text-yellow-500 transition-colors" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-white h-6 w-6 hover:text-yellow-500 transition-colors" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-white h-6 w-6 hover:text-yellow-500 transition-colors" />
                  </Link>
                  <Link
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-white h-6 w-6 hover:text-yellow-500 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
