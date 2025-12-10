import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

const CultureGrowth = () => {
  return (

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
            their full potential. Whether you are stepping into a leadership
            role, mastering a new skill, or pioneering groundbreaking
            projects, we are committed to your success. Because when our
            people grow, our company grows—and together, we build a future
            of endless possibilities.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
)
}

export default CultureGrowth