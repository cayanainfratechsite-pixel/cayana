// components/Gallery.tsx
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
  cropImages?: boolean;
}

// Custom arrow components
const GalleryNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-zinc-100 bg-zinc-800 rounded-full p-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const GalleryPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-zinc-100 bg-zinc-800 rounded-full p-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const Gallery: React.FC<GalleryProps> = ({ images, cropImages = false }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isSingleImage = images.length === 1;

  const baseSettings: Settings = {
    dots: false,
    infinite: !isSingleImage,
    centerMode: !isSingleImage,
    centerPadding: "60px",
    slidesToShow: isSingleImage ? 1 : 3,
    slidesToScroll: 1,
    autoplay: !isSingleImage,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isSingleImage ? 1 : 2,
          centerPadding: isSingleImage ? "0px" : "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: isSingleImage ? "0px" : "20px",
        },
      },
    ],
  };

  // Conditionally add arrows only if not single image
  if (!isSingleImage) {
    baseSettings.nextArrow = <GalleryNextArrow />;
    baseSettings.prevArrow = <GalleryPrevArrow />;
  }

  return (
    <section className="w-full py-8">
      <div className="relative">
        {isSingleImage ? (
          <div
            className="flex justify-center cursor-pointer"
            onClick={() => setSelectedImage(images[0])}
          >
            <motion.div className="relative w-full max-w-xl overflow-hidden rounded-lg">
              <Image
                src={images[0]}
                alt="Gallery image"
                width={600}
                height={400}
                className={`object-cover w-full h-full ${cropImages ? 'scale-[1.2]' : ''}`}
              />
            </motion.div>
          </div>
        ) : (
          <Slider {...baseSettings}>
            {images.map((src, index) => (
              <div
                key={index}
                className="px-2 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <motion.div className="min-w-[300px] relative flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={600}
                    height={400}
                    className={`object-cover w-full h-full ${cropImages ? 'scale-[1.2]' : ''}`}
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged Gallery Image"
              width={700}
              height={500}
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 px-2 text-white bg-gray-800 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
