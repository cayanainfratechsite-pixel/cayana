"use client";
import { CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchGallery } from "@/api/Gallery/page";

interface GalleryItem {
  _id: string;
  image: string;
}

export default function GallerySection() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const data = await fetchGallery();
        setGallery(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  // Remove the problematic useEffect with infinite loop

  return (
    <section className="p-8 mx-1 sm:mx-8 md:mx-16 lg:mx-24 mt-20">
      {/* Heading & Subheading */}
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Gallery
      </motion.h1>
      <motion.p
        className="text-xs sm:text-sm text-zinc-700 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our curated collection of stunning visuals and designs.
      </motion.p>

      {/* Gallery Cards */}
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <div className="flex justify-center py-10 col-span-full">
            <CircularProgress />
          </div>
        ) : error ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-zinc-800 mb-2">Section Under Construction</h2>
            <p className="text-zinc-500 max-w-md mx-auto">We're currently updating our gallery. Please check back later for the latest visuals.</p>
          </div>
        ) : (
          gallery.map((project) => (
            <motion.div 
              key={project._id} // Add key prop here
              className="p-3 hover:bg-white hover:shadow-lg hover:rounded-sm border border-zinc-200 cursor-pointer transition-all duration-500 ease-in-out"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={`Gallery Image ${project._id}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}