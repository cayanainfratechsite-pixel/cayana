"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  image: string;
  message: string;
  name: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/profile_user.jpg",
    message: "This service is absolutely amazing!",
    name: "John Doe",
    rating: 9,
  },
  {
    id: 2,
    image: "/images/s.jpg",
    message: "I had a fantastic experience. Highly recommended!",
    name: "Jane Smith",
    rating: 8,
  },
  {
    id: 3,
    image: "/images/asq.jpg",
    message: "Truly exceptional! I will be a returning customer.",
    name: "Alice Johnson",
    rating: 10,
  },
  {
    id: 4,
    image: "/images/as.jpg",
    message: "A very professional and quality service.",
    name: "Bob Williams",
    rating: 7,
  },
  {
    id: 5,
    image: "/images/images.png",
    message: "I couldn’t be happier with the results.",
    name: "Carolyn Brown",
    rating: 6,
  },
  {
    id: 6,
    image: "/images/s.jpg",
    message: "I couldn’t be happier with the results.",
    name: "Carolyn Brown",
    rating: 8,
  },
  {
    id: 7,
    image: "/images/asq.jpg",
    message: "I couldn’t be happier with the results.",
    name: "Carolyn Brown",
    rating: 6,
  },
  {
    id: 8,
    image: "/images/as.jpg",
    message: "I couldn’t be happier with the results.",
    name: "Carolyn Brown",
    rating: 8,
  },
];

const TestimonialsPage: React.FC = () => {
  // Determine how many cards to show based on the screen width.
  const [cardsToShow, setCardsToShow] = useState<number>(4);
  // currentIndex represents the index of the leftmost visible card.
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else if (width < 1280) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Calculate the maximum index so that we don't slide past the last card.
  const maxIndex = Math.max(testimonials.length - cardsToShow, 0);

  // Handlers to move the slider one card at a time.
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Auto-advance every 5 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <div className="bg-zinc-100 flex flex-col items-center p-8 py-24">
      {/* Heading & Subtext */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black inline-block relative">
          What Our Clients Say
          <span className="block h-[1px] w-[15rem] bg-zinc-900 mx-auto mt-2 rounded-2xl"></span>
        </h2>
        <p className="text-lg text-gray-600">
          Experience exceptional service and outstanding results.
        </p>
        <p className="text-lg text-gray-600">
          Discover why our clients keep coming back.
        </p>
      </div>

      <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="overflow-hidden">
          {/* Slider container */}
          <motion.div
            className="flex my-10"
            animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 p-4"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                {/* Card container */}
                <div className="rounded-bl-[3rem] overflow-hidden transition transform hover:scale-105">
                  {/* Image section: centered circular image with red border */}
                  <div className="flex justify-center pt-4">
                    <div className="w-28 h-28 z-50 rounded-full border-4 border-yellow-500 overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Info section with dark background and white text */}
                  <div className="relative bg-zinc-700 p-6 pt-14 z-30 -mt-10 rounded-tr-[3rem] ">
                    <p className="text-white italic text-center">
                      "{testimonial.message}"
                    </p>
                    <h3 className="mt-4 text-xl font-bold text-white text-center">
                      {testimonial.name}
                    </h3>
                    <div className="flex justify-center items-center mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.round(testimonial.rating / 2)
                              ? "text-yellow-500"
                              : "text-white"
                          }
                        />
                      ))}
                      <span className="ml-2 text-white text-sm">
                        {Math.round(testimonial.rating / 2)}/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute sm:-left-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition duration-300 hover:scale-110 focus:outline-none"
        >
          <FaArrowLeft size={10} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition duration-300 hover:scale-110 focus:outline-none"
        >
          <FaArrowRight size={10} />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-gray-800 scale-110" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
