// components/Gallery.tsx
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Underline from "../Underline";

const Gallery: React.FC = () => {
  // Hard-coded list of image paths
  const images: string[] = [
    "/images/Projects/projects1.webp",
    "/images/Projects/projects2.webp",
    "/images/Projects/projects3.webp",
    "/images/Projects/projects1.webp",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to scroll to a specific image
  const scrollToImage = (index: number) => {
    if (!containerRef.current) return;
    const children = containerRef.current.children;
    if (index >= children.length) return;
    const targetElement = children[index] as HTMLElement;
    containerRef.current.scrollTo({
      left: targetElement.offsetLeft,
      behavior: "smooth",
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      scrollToImage(nextIndex);
      setCurrentIndex(nextIndex);
    }, 1000); 

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section className="w-full py-8">
      <div className="relative">
        <div className=" text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
            Gallery
          </h1>
          <Underline />
        </div>

        {/* Image Slider */}
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] snap-center relative flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-transparent border border-zinc-900 text-zinc-900 
                                   px-8 py-2 rounded-sm font-semibold flex items-center gap-2 
                                   transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
                  >
                    Explore Gallery
                  </motion.button>
                </div>
      </div>
      {/* Inline global styles to hide scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
};

export default Gallery;
