"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  timeAgo: string;
  rating: number;
  message: string;
  avatar?: string;
}

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsData: Review[] = [
    {
      id: 1,
      name: "SUVAM BISWAJIT DAS",
      timeAgo: "4 months ago",
      rating: 5,
      message: "I had a fantastic experience with this company. The team is professional, courteous, and genuinely focused on helping clients make smart real estate investments. If you're planning to step into the property market in Odisha, this is a name you can trust. Their commitment to quality and transparency truly sets them apart. Highly recommended!"
    },
    {
      id: 2,
      name: "OJASWINI MOHANTY",
      timeAgo: "2 months ago",
      rating: 5,
      message: "Cayana Infratech Pvt Ltd is a reliable and professional company. Their project execution is timely, and they maintain high standards in construction quality. The team is responsive, transparent, and customer-friendly. Very satisfied with their service definitely one of the trusted names in the infrastructure sector."
    },
    {
      id: 3,
      name: "Aditya Subudhi",
      timeAgo: "1 months ago",
      rating: 5,
      message: "Cayana Infratech Pvt. Ltd. offers an engaging and growth-focused work environment. The company values collaboration, encourages innovative thinking, and supports continuous skill development. With transparent leadership and a positive workplace culture, employees are motivated to excel and take ownership of their professional journey"
    },
    {
      id: 4,
      name: "LOKANATHA NAYAK L.N",
      timeAgo: "2 months ago",
      rating: 5,
      message: "Their planning and vision for the new project are impressive — modern architecture, smart layouts, eco-friendly designs, and all essential amenities included. The location is also well-chosen, with easy access to schools, hospitals, and commercial areas."
    },
    {
      id: 5,
      name: "SASMITA MISHRA",
      timeAgo: "2 months ago",
      rating: 5,
      message: "Cayna Infratech Pvt. Ltd. is a promising company in the infrastructure and construction sector. They are known for timely project delivery, quality work, and a professional approach. The team is technically strong, responsive, and maintains good safety standards. Their focus on innovation and sustainable construction sets them apart. While still growing, the company shows great potential for becoming a key player in the industry."
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Calculate visible reviews for different screen sizes
  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviewsData.length;
      reviews.push(reviewsData[index]);
    }
    return reviews;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
              Clients Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients and partners 
            have to say about their experience with Cayana Infratech.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={`${review.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -30, 
                    scale: 0.9,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                >
                  {/* Decorative Quote */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center mb-6">
                    {/* Avatar */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base mr-4 shadow-md">
                      {getInitials(review.name)}
                    </div>
                    
                    {/* Name and Time */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {review.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1" />
                        <span className="text-xs sm:text-sm text-gray-500">
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Review Message */}
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base line-clamp-6">
                    {review.message}
                  </p>

                  {/* Bottom Gradient Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;