"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/1.webp";
import img2 from "../assets/images/2.webp";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/4.webp";
import img5 from "../assets/images/5.webp";

const images = [img1, img2, img3, img4, img5];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Container uses relative positioning.
    <div className="relative inline-block w-full overflow-hidden">
      <img
        src={images[currentIndex].src}
        alt=""
        className="block w-full object-contain object-top invisible"
      />

      {/*
        Animated image:
        This is positioned absolutely (covering the entire container)
        so that its transitions do not affect the container's layout.
      */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={`Slider image ${currentIndex + 1}`}
          className="absolute inset-0 block w-full object-contain object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/*
        Dot Navigation Overlay Positioned at the Bottom:
        Because the container’s height is always maintained by the placeholder,
        the dot navigation stays in the correct (bottom) position during transitions.
      */}
      <div
        className="
          absolute 
          bottom-4 sm:bottom-6 md:bottom-8 
          left-1/2 transform -translate-x-1/2 
          flex space-x-3 
          bg-black/60 
          px-3 sm:px-4 md:px-6
          py-1 sm:py-2 md:py-1.5
          rounded-full
          z-10
        "
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              transition-transform duration-200 hover:scale-110 focus:outline-none 
              ${
                currentIndex === index
                  ? "relative w-4 sm:w-10 md:w-12 h-1 sm:h-1.5 md:h-2 rounded-md bg-gray-300"
                  : "w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 rounded-full bg-white opacity-50"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/*
              Loader animation for the active dot.
              It smoothly fills the active dot over 2 seconds.
            */}
            {currentIndex === index && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-md"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
