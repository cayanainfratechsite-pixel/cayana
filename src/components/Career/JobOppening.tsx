import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Underline from "../Underline";
import PaginationComponent from "../Pagination";
import { fetchJobPosts, submitJobApplication } from "@/api/JobPosts/page";

export interface JobPosts {
  _id: string;
  title: string;
  description: string;
}

interface JobPostsResponse {
  success: number;
  message?: string;
  result: {
    jobs: JobPosts[];
    totalPages: number;
  };
}

const JobOppening = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobPosts, setJobPosts] = useState<JobPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const [applyFullName, setApplyFullName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyMobile, setApplyMobile] = useState("");
  // Change resume state to hold a File object (or null)
  const [applyResume, setApplyResume] = useState<File | null>(null);
  const [applyMessage, setApplyMessage] = useState("");
  const [applyLoading, setApplyLoading] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobPostsData = async () => {
      try {
        const data: JobPostsResponse = await fetchJobPosts(page);
        setJobPosts(data.result.jobs);
        setTotalPages(data.result.totalPages);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchJobPostsData();
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleApplyClick = (jobId: string) => {
    setSelectedJobId(jobId);
    setShowForm(true);
  };

  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedJobId) return;
    setApplyLoading(true);
    setApplyError(null);
    try {
      // Create a FormData instance for file upload
      const formData = new FormData();
      formData.append("jobId", selectedJobId);
      formData.append("fullName", applyFullName);
      formData.append("email", applyEmail);
      formData.append("mobile", applyMobile);
      if (applyResume) {
        formData.append("resume", applyResume);
      }
      formData.append("message", applyMessage);

      // Update submitJobApplication to accept FormData instead of a JSON object
      const response = await submitJobApplication(formData);
      if (response && response.data) {
        console.log("Application Response:", response.data);
      }
      alert("Application submitted successfully!");
      // Clear form fields and close modal
      setApplyFullName("");
      setApplyEmail("");
      setApplyMobile("");
      setApplyResume(null);
      setApplyMessage("");
      setShowForm(false);
    } catch (error) {
      console.error("Application error:", error);
      setApplyError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setApplyLoading(false);
    }
  };

  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="mx-4 md:mx-20">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase text-center">
            Job Openings
          </h2>
          <Underline />
          <div className="">
            <table className="min-w-full bg-white">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 md:px-6 text-left font-medium text-sm">
                    Job Title
                  </th>
                  <th className="py-3 px-4 md:px-6 text-left font-medium text-sm">
                    Responsibilities &amp; Requirements
                  </th>
                  <th className="py-3 px-4 md:px-6 text-center font-medium text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={3} className="py-4 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : jobPosts.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-4 text-center">
                      No job openings available.
                    </td>
                  </tr>
                ) : (
                  jobPosts.map((job) => (
                    <motion.tr
                      key={job._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="border-b hover:bg-gray-200 transition-colors"
                    >
                      <td className="py-4 px-4 md:px-6">
                        <h3 className="text-xs sm:text-base text-zinc-900 font-medium">
                          {job.title}
                        </h3>
                      </td>
                      <td className="py-4 px-4 md:px-6 text-zinc-900 text-xs sm:text-base">
                        <p>{job.description}</p>
                      </td>
                      <td className="py-4 px-4 md:px-6 text-center">
                        <a
                          href="#apply-form"
                          onClick={(e) => {
                            e.preventDefault();
                            handleApplyClick(job._id);
                          }}
                          className="inline-block bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition text-xs sm:text-sm"
                        >
                          Apply Now
                        </a>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pagination Component */}
      <PaginationComponent count={totalPages} page={page} onChange={handlePageChange} />

      {/* Modal Popup for Application Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg relative w-full max-w-sm sm:max-w-2xl mx-4"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase text-center">
              Apply Now
            </h2>
            {applyError && <p className="text-red-500 text-center mt-2">{applyError}</p>}
            <form className="space-y-6 mt-4" onSubmit={handleApplicationSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={applyFullName}
                  onChange={(e) => setApplyFullName(e.target.value)}
                  className="w-full text-black border border-gray-300 p-3 rounded"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={applyEmail}
                  onChange={(e) => setApplyEmail(e.target.value)}
                  className="w-full text-black border border-gray-300 p-3 rounded"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={applyMobile}
                  onChange={(e) => setApplyMobile(e.target.value)}
                  className="w-full text-black border border-gray-300 p-3 rounded"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                  Resume Upload
                </label>
                {/* Change input type to file */}
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setApplyResume(e.target.files[0]);
                    }
                  }}
                  className="w-full text-black border border-gray-300 p-3 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={applyMessage}
                  onChange={(e) => setApplyMessage(e.target.value)}
                  className="w-full text-black border border-gray-300 p-3 rounded"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={applyLoading}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition"
              >
                {applyLoading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default JobOppening;
