// app/page.tsx (or pages/page.tsx depending on your project structure)
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaRegCalendarAlt,
  FaEdit,
  FaClock,
  FaUser,
  FaEye,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import { fetchBlogById, fetchBlogsRecent } from "@/api/Blogs/page";

interface BlogImage {
  cardImage: string;
  coverImage: string;
}

interface BlogResponse {
  success: number;
  message?: string;
  result: {
    blogs: Blog[];
    totalPages: number;
  };
}

interface Blog {
  id: string;
  cardImage: string;
  coverImage: string;
  content: string;
  images: BlogImage;
  publisherName: string;
  title: string;
  approxReadTime: number;
  publishedDate: string;
  modifiedDate: string;
}

const Page: React.FC = () => {
  
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlog = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await fetchBlogById(id);
          const isSuccess = response && (response.success === 0 || response.success === 1);
          const data = response;

          if (isSuccess && data.result) {
            const {
              images,
              publisherName,
              title,
              content,
              approxReadTime,
              publishedDate,
              modifiedDate,
            } = data.result;
            setBlog({
              id,
              cardImage: images?.cardImage || "",
              coverImage: images?.coverImage || "",
              publisherName,
              title,
              content,
              approxReadTime,
              images,
              publishedDate,
              modifiedDate,
            });
          } else {
            console.warn("Blog fetch unsuccessful:", data?.message);
            setBlog(null);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
          setBlog(null);
        } finally {
          setLoading(false);
        }
      }
    };

    getBlog();
  }, [id]);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data: BlogResponse = await fetchBlogsRecent(page);
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
    <div className="min-h-screen bg-gray-50 py-16 px-4 pt-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Blog Details */}
          <div className="md:col-span-2">
            {!loading && !blog ? (
              <div className="flex flex-col items-center justify-center py-20 text-center border border-gray-200 bg-white">
                <div className="w-16 h-16 border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-zinc-800 mb-2">Section Under Construction</h2>
                <p className="text-zinc-500 max-w-md mx-auto">We're currently updating this blog post. Please check back later for the latest insights.</p>
              </div>
            ) : (
              <>
                {/* Header Section */}

                <header className="mb-8 border-b pb-4">
                  {blog ? (
                    <>
                      <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-4 leading-tight">
                        {blog.title}
                      </h1>
                      
                      <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 space-x-2 sm:space-x-4">
                        <div className="flex items-center">
                          <FaRegCalendarAlt className="mr-1" />
                          <span>Published: {blog.publishedDate}</span>
                        </div>
                        <div className="flex items-center">
                          <FaEdit className="mr-1" />
                          <span>Modified: {blog.modifiedDate}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          <span>{blog.approxReadTime} min read</span>
                        </div>
                        <div className="flex items-center">
                          <FaUser className="mr-1" />
                          <span>{blog.publisherName}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-4">
                      Loading Blog...
                    </h1>
                  )}
                </header>
                {/* Image Section */}
                <section className="mb-8">
                  <div className="w-full border border-gray-200 overflow-hidden">
                    {blog ? (
                      <Image
                        src={blog.images.coverImage}
                        alt={blog.title}
                        width={1200}
                        height={392}
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-200 animate-pulse" />
                    )}
                  </div>
                </section>

                {/* Content Section */}

                <article
                  className="prose sm:prose lg:prose-xl text-gray-800"
                  dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
                ></article>
              </>
            )}
          </div>

          {/* Right Column: Recent Blogs */}
          <aside>
            <h2 className="text-lg text-end sm:text-xl md:text-2xl font-medium  text-gray-900 mb-6">
              Recent Blogs
            </h2>
            <div className="space-y-6">
              {error ? (
                <div className="flex flex-col items-center justify-center py-10 text-center border border-gray-200 bg-white">
                  <div className="w-12 h-12 border-2 border-dashed border-zinc-300 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-zinc-800 mb-1">Under Construction</h3>
                  <p className="text-zinc-500 text-sm max-w-[200px] mx-auto">Recent blogs are being updated.</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div key={blog.id} className="border border-gray-200 p-4">
                    <div className="w-full border border-gray-200 overflow-hidden mb-4">
                      <Image
                        src={blog.images.cardImage}
                        alt={blog.title}
                        width={640} // original image width
                        height={480} // original image height
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {blog.title}
                    </h3>
                    {/* <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p> */}
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <div className="flex">
                        <FaRegCalendarAlt className="mr-1" />
                        <span>Published: {blog.publishedDate}</span>
                      </div>
                      <span>By: {blog.publisherName}</span>
                    </div>
                    {/* Read More Button */}
                    <div className="mt-2">
                      <a
                        href="#"
                        className="text-[#0553F1] hover:text-blue-800 text-sm font-semibold"
                      >
                        Read More &rarr;
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
