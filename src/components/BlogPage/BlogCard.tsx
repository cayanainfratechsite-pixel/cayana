"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Underline from "../Underline";
import PaginationComponent from "../Pagination";

import { fetchBlogs } from "@/api/Blogs/page";

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

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data: BlogResponse = await fetchBlogs(page);
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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

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
          {error ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-medium text-zinc-800 mb-2">Section Under Construction</h2>
              <p className="text-zinc-500 max-w-md mx-auto">We're currently updating our blogs section. Please check back later for the latest insights.</p>
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center py-20">
               <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-zinc-900"></div>
            </div>
          ) : (
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
          )}
        </div>
      </section>
      <PaginationComponent
        count={totalPages}
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
};

export default BlogPage;
