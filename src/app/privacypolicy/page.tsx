"use client";
import Underline from "@/components/Underline";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../../public/images/privacypolicy/privacy2.jpg"; // You might want to use a different image
import { FaQuoteLeft } from "react-icons/fa";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
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
        className="relative w-full h-[650px] "
      >
        <Image
          src={img}
          alt="Privacy Policy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 
                      px-4 py-1 md:px-8 md:py-5 mx-2 md:mx-10 lg:mx-28 
                      mb-2 md:mb-5 rounded-lg">
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
            Your privacy is our priority. We are committed to protecting your personal information
            and ensuring transparency in how we handle your data.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center my-12"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
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
            className="p-4 sm:p-6 rounded-lg shadow-sm"
            variants={sectionVariants}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-800">1. Information We Collect</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including name, email address, phone number, and property preferences when you interact with our website or services. We may also collect technical information about your device and usage of our website.
            </p>
          </motion.section>

          <motion.section 
            className="p-4 sm:p-6 rounded-lg shadow-sm"
            variants={sectionVariants}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We use your information to provide and improve our services, communicate with you about properties, process your requests, and send you relevant updates. We may also use your information for analytics and to enhance the user experience on our website.
            </p>
          </motion.section>

          <motion.section 
            className="p-4 sm:p-6 rounded-lg shadow-sm"
            variants={sectionVariants}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">3. Information Sharing</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </motion.section>

          <motion.section 
            className="p-4 sm:p-6 rounded-lg shadow-sm"
            variants={sectionVariants}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">4. Data Security</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.
            </p>
          </motion.section>

          <motion.section 
            className="p-4 sm:p-6 rounded-lg shadow-sm"
            variants={sectionVariants}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">5. Your Rights</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications from us at any time.
            </p>
          </motion.section>

          <motion.section 
            className="p-4 sm:p-6 rounded-lg shadow-sm"
            variants={sectionVariants}
          >
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">6. Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you have any questions about our Privacy Policy, please contact us at:<br />
              Cayana Infratech Pvt Ltd<br />
              Email: privacy@cayana.com
            </p>
          </motion.section>

          <motion.footer 
            className="text-xs sm:text-sm text-gray-600 text-center pt-6 sm:pt-8 border-t border-gray-200 mb-4"
            variants={sectionVariants}
          >
            Last updated: April 2025
          </motion.footer>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;