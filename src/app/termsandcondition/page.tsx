"use client";
import Underline from "@/components/Underline";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import img from "../../../public/images/TermsandConditions/termsandcondition2.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const TermsAndConditions = () => {

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
          alt="Terms and Conditions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Quote Container */}
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
            Our commitment to transparency and trust forms the foundation of
            every relationship we build with our clients.
          </motion.p>
        </div>
      </motion.div>

      <div className="mx-auto mb-1 px-4 sm:px-6 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-12 text-center"
        >
          <h2 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
            Terms and Conditions
          </h2>
          <Underline maxWidth="400px" />
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8 md:space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-800 text-lg sm:text-xl">1. Acceptance of Terms</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              By accessing and using the website of Cayana Infratech Pvt. Ltd., you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">2. Information Accuracy</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              While we strive to provide accurate and up-to-date information about our real estate projects, all information on this website is subject to change without notice. Images and floor plans are artistic representations and may differ from the actual property.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">3. Intellectual Property</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Cayana Infratech Pvt. Ltd. and is protected by intellectual property laws.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">4. Privacy Policy</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">5. Limitation of Liability</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cayana Infratech Pvt. Ltd. shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or services.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">6. Changes in Terms</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We may update these Terms from time to time as per requirements and availability of information on the website.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">7. Governing Law</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
          </motion.section>

          <motion.section
            className="shadow-sm p-4 sm:p-6 rounded-lg"
            variants={sectionVariants}
          >
            <h2 className="mb-3 sm:mb-4 font-medium text-gray-900 text-lg sm:text-xl">8. Contact Information</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              For any queries regarding these Terms and Conditions, please write to us at <a
                href="mailto:support@cayana.co.in"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
              >
                support@cayana.co.in
              </a>
            </p>
          </motion.section>

          {/* <motion.footer 
            className="pt-6 sm:pt-8 border-gray-200 border-t text-gray-600 text-xs sm:text-sm text-center"
            variants={sectionVariants}
          >
            Last updated: April 2025
          </motion.footer> */}
        </motion.div>
      </div>
    </>
  );
};

export default TermsAndConditions;