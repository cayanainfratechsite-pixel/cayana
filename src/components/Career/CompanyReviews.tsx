"use client";
import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviewImages = [
  "/images/Career/review-1.jpeg",
  "/images/Career/review-2.jpeg",
  "/images/Career/review-3.jpeg",
  "/images/Career/review-4.jpeg",
];

import { motion } from "framer-motion";

const CompanyReviews = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-100/50 rounded-full shadow-sm"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4"
          >
            What Our Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Says
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover why Cayana Infratech is recognized as a great place to work
            by our employees.
          </motion.p>
        </div>

        {/* Ratings Summary */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* AmbitionBox Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">4.8</span>
                <div className="flex text-yellow-400">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 font-medium">AmbitionBox Rating</p>
              <p className="text-sm text-gray-500 mt-1">Based on 50+ reviews</p>
            </div>
            {/* Placeholder for Logo - using text for now if image not available */}
            <div className="bg-[#4a90e2]/10 px-4 py-2 rounded-lg">
              <span className="text-xl font-bold text-[#4a90e2]">
                AmbitionBox
              </span>
            </div>
          </div>

          {/* Glassdoor Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">4.5</span>
                <div className="flex text-green-500">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current opacity-50" />
                </div>
              </div>
              <p className="text-gray-600 font-medium">Glassdoor Rating</p>
              <p className="text-sm text-gray-500 mt-1">Based on 20+ reviews</p>
            </div>
            <div className="bg-[#0caa41]/10 px-4 py-2 rounded-lg">
              <span className="text-xl font-bold text-[#0caa41]">
                Glassdoor
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-5xl mx-auto relative px-4 md:px-12">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {reviewImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white">
                  <Image
                    src={src}
                    alt={`Review Screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .swiper-pagination-bullet-active {
              background-color: #111827 !important;
            }
            .swiper-button-next,
            .swiper-button-prev {
              color: #111827 !important;
              background: white;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              box-shadow:
                0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 18px !important;
              font-weight: bold;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default CompanyReviews;
