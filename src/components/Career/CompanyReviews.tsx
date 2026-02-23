"use client";
import { Star, ExternalLink, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CompanyReviews = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-100/50 rounded-full shadow-sm"
          >
            Employee Reviews
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4"
          >
            Trusted by Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Team
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed"
          >
            See what our employees say about working at Cayana Infratech on leading review platforms.
          </motion.p>
        </div>

        {/* Ratings Summary */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* AmbitionBox Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center justify-between gap-6">
              {/* Left Side - Rating Info */}
              <div className="flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full mb-4">
                  <TrendingUp className="w-3 h-3" />
                  <span>Excellent</span>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">4.7</span>
                    <span className="text-gray-500 text-lg mb-2">/5</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${
                          star <= 4.7
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on <span className="font-semibold text-gray-900">50+</span> employee reviews
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.ambitionbox.com/reviews/cayana-infratech-reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-lg transition-all duration-200 group/link"
                >
                  <span>View All Reviews</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right Side - Logo */}
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="relative w-28 h-28 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl shadow-md border border-blue-100 p-3 flex items-center justify-center">
                  <Image
                    src="/images/ab-brand.png"
                    alt="AmbitionBox Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-base font-bold text-gray-800">AmbitionBox</span>
              </div>
            </div>
          </motion.div>

          {/* Glassdoor Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-300 hover:bg-green-50/50 transition-all duration-300 overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center justify-between gap-6">
              {/* Left Side - Rating Info */}
              <div className="flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full mb-4">
                  <TrendingUp className="w-3 h-3" />
                  <span>Great</span>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">4.5</span>
                    <span className="text-gray-500 text-lg mb-2">/5</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${
                          star <= 4
                            ? "fill-green-500 text-green-500"
                            : star === 5
                            ? "fill-green-500/30 text-green-500/30"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on <span className="font-semibold text-gray-900">20+</span> employee reviews
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-4 py-2.5 rounded-lg transition-all duration-200 group/link"
                >
                  <span>View All Reviews</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right Side - Logo */}
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="relative w-28 h-28 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl shadow-md border border-green-100 p-3 flex items-center justify-center">
                  <Image
                    src="/images/free-glassdoor-logo-icon-svg-download-png-3030157.webp"
                    alt="Glassdoor Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-base font-bold text-gray-800">Glassdoor</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyReviews;
