"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Import landscape images
import img1 from "../assets/images/1.webp";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.webp";
import img6 from "../assets/images/6.webp";

// Import portrait images
import img1P from "../assets/images/prtHome1.png";
import img2P from "../assets/images/prtHome2.webp";
import img3P from "../assets/images/prtHome3.png";
import img4P from "../assets/images/prtHome4.png";
import img5P from "../assets/images/prtHome5.png";
import img6P from "../assets/images/prtHome6.png";

// Store images in separate arrays
const imagesLandscape = [img1, img2, img3, img4, img5, img6];
const imagesPortrait = [img1P, img2P, img3P, img4P, img5P, img6P];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreenSize(); // Check initially
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const images = isMobile ? imagesPortrait : imagesLandscape;

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      className="relative inline-block w-full overflow-hidden"
      {...handlers} // Attach swipe event handlers
    >
      {/* Placeholder for height control */}
      <img
        src={images[currentIndex].src}
        alt="Hero Image"
        className="block w-full object-contain object-top invisible"
      />

      {/* Animated Image */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={`Slider image ${currentIndex + 1}`}
          className="absolute inset-0 block w-full object-cover object-top"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Dot Navigation */}
      <div
        className="
          absolute bottom-4 sm:bottom-6 md:bottom-8 
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
            {currentIndex === index && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-md"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
