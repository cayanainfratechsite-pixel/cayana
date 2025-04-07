"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Underline from "@/components/Underline";

import { fetchBlogsHome } from "@/api/Blogs/page";

interface BlogImage {
  cardImage: string;
  coverImage: string;
}

export interface Blog {
  id: string;
  images: BlogImage;
  publisherName: string;
  title: string;
  approxReadTime: number;
  publishedDate: string;
  modifiedDate: string;
}

interface BlogResponse {
  success: number;
  message?: string;
  result: {
    blogs: Blog[];
    totalPages: number;
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BlogBentoGridSmall: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data: BlogResponse = await fetchBlogsHome(page);
        if (data.success === 0) {
          setBlogs(data.result.blogs);
          setTotalPages(data.result.totalPages);
        } else {
          setError(data.message || "An error occurred");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsData();
  }, [page]);

  return (
    <>
      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Centered Heading & Description */}
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Blogs
            </h1>
            <Underline />
            <p className="text-zinc-900 mt-2">
              Explore our latest articles and insights on design, architecture,
              and innovation.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                {/* Image Section */}
                <div>
                  <img
                    src={blog.images.cardImage}
                    alt={blog.title}
                    className="w-full h-auto object-contain p-3"
                  />
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <h2 className="text-xl font-medium text-zinc-900 mb-2">
                    {blog.title}
                  </h2>
                  {/* <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p> */}
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>Published: {blog.publishedDate}</span>
                    <span>By: {blog.publisherName}</span>
                  </div>
                  <Link
                    href={`/blogs/${blog.id}`} // Dynamic URL based on blog id
                    className="inline-block text-[#0553F1] hover:underline font-medium"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {blogs.length > 6 && (
          <div className="flex justify-center mt-12">
            <Link href="/blogs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border border-zinc-900 text-zinc-900 
                 px-8 py-2 rounded-sm font-semibold flex items-center gap-2 
                 transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
              >
                Explore All Blogs
              </motion.button>
            </Link>
          </div>)}
        </div>
      </section>
    </>
  );
};

export default BlogBentoGridSmall;
