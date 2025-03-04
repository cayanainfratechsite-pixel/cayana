// components/Gallery.tsx
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Underline from "../Underline";


interface GalleryProps {
  images: string[];
}



const Gallery: React.FC<GalleryProps> = ({ images }) => {

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
