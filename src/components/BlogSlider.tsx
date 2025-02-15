"use client";

import React from "react";
import { motion } from "framer-motion";

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
    image: "/images/Blog/blog1.png",
    title: "Discover the Latest Trends",
    excerpt:
      "Explore the newest trends in design and innovation in our comprehensive guide.",
    link: "/blog/1",
  },
  {
    id: 2,
    image: "/images/Blog/blog1.webp",
    title: "Building Sustainable Futures",
    excerpt:
      "Learn how sustainable practices are transforming construction and architecture.",
    link: "/blog/2",
  },
  {
    id: 3,
    image: "/images/Blog/blog2.webp",
    title: "Innovative Design Strategies",
    excerpt:
      "Uncover creative strategies that are revolutionizing space design across the globe.",
    link: "/blog/3",
  },
  {
    id: 4,
    image: "/images/Blog/blog3.webp",
    title: "A Journey Through Architecture",
    excerpt:
      "Take a tour through some of the most iconic architectural feats and discover their stories.",
    link: "/blog/4",
  },
  {
    id: 5,
    image: "/images/Blog/blog4.webp",
    title: "Emerging Design Ideas",
    excerpt:
      "A look into the emerging ideas that are shaping the future of design.",
    link: "/blog/5",
  },
];

const BlogBentoGridSmall: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Trends
            <span className="block h-[1px] w-[15rem] bg-zinc-900 mx-auto mt-2"></span>
          </h1>
          <p className="text-lg text-gray-700">
            Discover the world of design, architecture, and innovation through
            our curated blogs and articles.
          </p>
        </div>

        {/* Professional Bento-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => {
            // Optionally, make the first card span two columns on medium screens.
            const isFirst = index === 0;
            return (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-md overflow-hidden shadow-lg transition transform duration-200 ${
                  isFirst ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`w-full object-cover ${isFirst ? "h-64" : "h-48"}`}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 text-sm">
                    {blog.excerpt}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-transparent border border-zinc-900 text-zinc-900 
                           px-8 py-2 rounded-sm font-semibold flex items-center gap-2 
                           transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
          >
            Explore All Blogs
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogBentoGridSmall;
