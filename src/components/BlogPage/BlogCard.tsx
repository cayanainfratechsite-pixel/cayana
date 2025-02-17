"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Underline from "../Underline";

interface Blog {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    image: "/images/Blog/blog1.webp",
    title: "Early investment in real estate.",
    excerpt:
      "Explore the newest trends in design and innovation in our comprehensive guide.",
    link: "/blogs/1",
  },
  {
    id: 2,
    image: "/images/Blog/blog2.webp",
    title: "Future of real estate market in Puri (geographical and commercial importance of Puri)",
    excerpt:
      "Learn how sustainable practices are transforming construction and architecture.",
    link: "/blogs/2",
  },
  {
    id: 3,
    image: "/images/Blog/blog3.webp",
    title: "⁠⁠Documents needed for buying a house in Odisha",
    excerpt:
      "Uncover creative strategies that are revolutionizing space design across the globe.",
    link: "/blogs/3",
  },
  {
    id: 4,
    image: "/images/Blog/blog4.webp",
    title: "⁠Future of real estate in Odisha",
    excerpt:
      "Take a tour through some of the most iconic architectural feats and discover their stories.",
    link: "/blogs/4",
  },
];

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
  return (
    <>
      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Centered Heading & Description */}
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">Blogs</h1>
            <Underline />
            <p className="text-zinc-900 mt-2">
              Explore our latest articles and insights on design, architecture, and innovation.
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
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-auto object-contain p-3"
                  />
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <h2 className="text-xl font-medium text-zinc-900 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>Published: Aug 10, 2025</span>
                    <span>By: John Doe</span>
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
        </div>
      </section>
    </>
  );
};

export default BlogPage;
