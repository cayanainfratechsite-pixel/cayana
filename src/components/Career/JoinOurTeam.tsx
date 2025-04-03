import React from 'react'
import { motion } from "framer-motion";
import Underline from '../Underline';

const JoinOurTeam = () => {
  return (

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
        At Cayana Infratech, we just don’t build properties—we build
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

  )
}

export default JoinOurTeam