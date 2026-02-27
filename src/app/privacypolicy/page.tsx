"use client";
import Underline from "@/components/Underline";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import img from "../../../public/images/privacypolicy/privacy2.jpg"; // You might want to use a different image
import { FaQuoteLeft } from "react-icons/fa";

const PrivacyPolicy = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[650px]"
      >
        <Image
          src={img}
          alt="Privacy Policy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="right-0 bottom-0 left-0 absolute bg-black/60 mx-2 md:mx-10 lg:mx-28 mb-2 md:mb-5 px-4 md:px-8 py-1 md:py-5 rounded-lg">

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
            We respect your privacy and are committed to protecting it through this Privacy Policy.
            This document outlines how we collect, use, disclose, and safeguard your information
            when you use our website and services.
          </motion.p>
        </div>
      </motion.div>

      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-12 text-center"
        >
          <h2 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
            Privacy Policy
          </h2>
          <Underline />
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8 md:space-y-10 mb-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-800 text-lg sm:text-xl">1. Information We Collect</h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We collect information that you provide directly to us, including name, email address, phone number, and property preferences when you interact with our website or services. We may also collect technical information about your device and usage of our website.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">2. How We Use Your Information</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We use your information to provide and improve our services, communicate with you about properties, process your requests, and send you relevant updates. We may also use your information for analytics and to enhance the user experience on our website.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">3. Information Sharing</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">4. Data Security</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">5. Your Rights</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications from us at any time.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">6. Contact Us</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              For any query on our Privacy Policy, please write to us at:<br />
              Cayana Infratech Pvt. Ltd.<br />
              Email: <a
                href="mailto:support@cayana.co.in"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
              >
                support@cayana.co.in
              </a>
            </p>
          </motion.section>

          {/* <motion.footer 
            className="mb-4 pt-6 sm:pt-8 border-gray-200 border-t text-gray-600 text-xs sm:text-sm text-center"
            variants={sectionVariants}
          >
            Last updated: April 2025
          </motion.footer> */}
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;