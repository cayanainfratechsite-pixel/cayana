"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Underline from "../Underline";
import PaginationComponent from "../Pagination";
import {
  Upload,
  X,
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  Building2,
  Wallet,
  Home,
} from "lucide-react";
import { useParams } from "next/navigation";
import { fetchJobPosts, fetchJobPostById, submitJobApplication } from "@/api/jobPosts/page";

export interface JobPosts {
  _id: string;
  title: string;
  description: string;
  location?: string | { city?: string; headquarters?: string; type?: string };
  jobType?: string;
  type?: string; // fallback for current usage
  experience?: string | { min?: number; max?: number };
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
    period?: string;
  };
  requirements?: {
    experience?: { min?: number; max?: number };
    education?: string;
    preferredEducation?: string;
    skills?: string[];
    materialKnowledge?: string[];
  };
  responsibilities?: string[];
  benefits?: string[];
  traits?: string[];
  industry?: string;
  whyJoinUs?: string;
  company?: string;
  stayRequired?: boolean;
}

interface JobPostsResponse {
  success: number;
  message?: string;
  result: {
    jobs: JobPosts[];
    totalPages: number;
  };
}

const JobOppeningNew = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const [showForm, setShowForm] = useState(false);
  const [jobPosts, setJobPosts] = useState<JobPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);

  const [applyFullName, setApplyFullName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyMobile, setApplyMobile] = useState("");
  const [applyResume, setApplyResume] = useState<File | null>(null);
  const [applyMessage, setApplyMessage] = useState("");
  const [applyLoading, setApplyLoading] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchJobData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          // Fetch specific job by ID
          const response = await fetchJobPostById(id);
          const isSuccess = response && (response.success === 0 || response.success === 1);
          const data = response.data || response;

          if (isSuccess && data.result) {
            const job = data.result;
            setJobPosts([job]);
            setSelectedJobId(job._id);
            setSelectedJobTitle(job.title);
            setTotalPages(0);
          } else {
            setError(data?.message || "Job details not found");
            setJobPosts([]);
          }
        } else {
          // Fetch all jobs for listing
          const response = await fetchJobPosts(page);
          const isSuccess = response && (response.data?.success === 0 || response.data?.success === 1 || response.success === 0 || response.success === 1 || response.status === 200);
          const data = response.data || response;

          if (isSuccess && data.result?.jobs) {
            setJobPosts(data.result.jobs);
            setTotalPages(data.result.totalPages || 1);
          } else if (data.result && !data.result.jobs && Array.isArray(data.result)) {
            // Fallback for different list format
            setJobPosts(data.result);
            setTotalPages(1);
          } else if (!isSuccess) {
            setError(data?.message || "Failed to fetch job posts");
          } else {
            setError("Invalid response format from server");
          }
        }
      } catch (error) {
        console.error("Fetch job data error:", error);
        setError(error instanceof Error ? error.message : "An unexpected error occurred while fetching jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, [page, id]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!applyFullName.trim()) errors.fullName = "Full name is required";
    if (!applyEmail.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(applyEmail)) {
      errors.email = "Please enter a valid email address";
    }
    if (!applyMobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!phoneRegex.test(applyMobile.replace(/\D/g, ""))) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!applyResume) errors.resume = "Please upload your resume";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    const element = document.getElementById("job-openings-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyClick = (jobId: string, jobTitle: string) => {
    setSelectedJobId(jobId);
    setSelectedJobTitle(jobTitle);
    setShowForm(true);
    setFieldErrors({});
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };

  const handleApplicationSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!selectedJobId) return;

    if (!validateForm()) {
      return;
    }

    setApplyLoading(true);
    setApplyError(null);
    try {
      const formData = new FormData();
      formData.append("jobId", selectedJobId);
      formData.append("fullName", applyFullName);
      formData.append("email", applyEmail);
      formData.append("mobile", applyMobile);
      if (applyResume) {
        formData.append("resume", applyResume);
      }
      formData.append(
        "message",
        applyMessage || "Applying for " + selectedJobTitle,
      );

      // Web3Forms submission
      const web3FormData = new FormData();
      web3FormData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "75823abd-70b3-472a-b9dc-cb84995624f6",
      );
      web3FormData.append(
        "subject",
        `New Job Application: ${selectedJobTitle}`,
      );
      web3FormData.append("from_name", applyFullName || "Cayana Careers");
      web3FormData.append("fullName", applyFullName);
      web3FormData.append("email", applyEmail);
      web3FormData.append("mobile", applyMobile);
      web3FormData.append(
        "message",
        applyMessage || "Applying for " + selectedJobTitle,
      );

      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: web3FormData,
        });
      } catch (err) {
        console.error("Web3Forms error:", err);
      }

      const response = await submitJobApplication(formData);
      if (response && response.data) {
        console.log("Application Response:", response.data);
      }
      alert("Application submitted successfully!");
      setApplyFullName("");
      setApplyEmail("");
      setApplyMobile("");
      setApplyResume(null);
      setApplyMessage("");
      if (!id) closeForm();
    } catch (error) {
      console.error("Application error:", error);
      setApplyError(
        error instanceof Error ? error.message : "An error occurred",
      );
    } finally {
      setApplyLoading(false);
    }
  };

  return (
    <div id="job-openings-section" className="relative">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase mb-2"
            >
              Work at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Cayana
              </span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
            />
            <p className="mt-6 text-gray-600 text-center max-w-2xl text-lg">
              Join our mission to transform the industry. Discover your next
              career move at Cayana.
            </p>
          </div>

          <div
            className={`grid gap-6 ${id ? "max-w-4xl mx-auto grid-cols-1" : "md:grid-cols-1 lg:grid-cols-2"}`}
          >
            {loading ? (
              Array.from({ length: id ? 1 : 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm animate-pulse border border-gray-100"
                >
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-full py-12 text-center bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-600 font-medium">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Try Again
                </button>
              </div>
            ) : jobPosts.length === 0 ? (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl shadow-sm border border-gray-100">
                <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  No vacancies right now
                </h3>
                <p className="text-gray-500 mt-2">
                  Check back later or follow us for updates.
                </p>
              </div>
            ) : (
              jobPosts.map((job) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white p-8 rounded-[32px] border border-gray-100 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 uppercase group-hover:text-blue-600 transition-colors leading-tight">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:shrink-0">
                        <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full uppercase tracking-wider border border-blue-100">
                          {job.jobType || job.type || "Full Time"}
                        </span>
                        {typeof job.location === "object" && job.location?.type && (
                          <span className="px-4 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-wider border border-slate-100">
                            {job.location.type}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8 text-xs sm:text-sm text-gray-500 font-medium">
                      {job.company && (
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-900 font-bold">{job.company}</span>
                        </div>
                      )}

                      {job.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-700">
                            {typeof job.location === "object"
                              ? `${job.location.city || ""}${job.location.city && job.location.headquarters ? " (HQ " + job.location.headquarters + ")" : job.location.headquarters || ""}`
                              : job.location}
                          </span>
                        </div>
                      )}

                      {(job.requirements?.experience || job.experience) && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-700">
                            Experience: {
                              job.requirements?.experience
                                ? `${job.requirements.experience.min}-${job.requirements.experience.max} Yrs`
                                : typeof job.experience === 'object' && job.experience !== null
                                  ? `${job.experience.min}-${job.experience.max} Yrs`
                                  : job.experience
                            }
                          </span>
                        </div>
                      )}

                      {job.industry && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-700">{job.industry}</span>
                        </div>
                      )}

                      {job.salary && (job.salary.min || job.salary.max) && (
                        <div className="flex items-center gap-2">
                          <Wallet className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-700">
                            Salary: {job.salary.currency || "₹"} {job.salary.min ? job.salary.min.toLocaleString() : ""}
                            {job.salary.min && job.salary.max ? " – " : ""}
                            {job.salary.max ? job.salary.max.toLocaleString() : ""} {job.salary.period || ""}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                      {/* Responsibilities */}
                      {(job.responsibilities?.length || job.description) && (
                        <div>
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">
                            Key Responsibilities
                          </h4>
                          <div className="text-gray-600 space-y-3">
                            {job.responsibilities && job.responsibilities.length > 0 ? (
                              job.responsibilities.map((resp, i) => (
                                <p key={i} className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                  {resp}
                                </p>
                              ))
                            ) : (
                              <p className="text-sm leading-relaxed">{job.description}</p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Requirements */}
                      <div className="relative">
                        <div className="hidden md:block absolute -left-5 top-0 bottom-0 w-px bg-gray-100"></div>
                        <div className="md:hidden h-px bg-gray-100 w-full mb-8"></div>

                        {job.requirements && (
                          <>
                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">
                              What we expect
                            </h4>
                            <div className="text-gray-600 space-y-4">
                              {job.requirements.education && (
                                <p className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                  <span>
                                    <span className="font-semibold">Education:</span> {job.requirements.education}
                                    {job.requirements.preferredEducation && ` (Preferred: ${job.requirements.preferredEducation})`}
                                  </span>
                                </p>
                              )}

                              {job.requirements.skills && job.requirements.skills.length > 0 && (
                                <div className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                  <div>
                                    <span className="font-semibold">Skills:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      {job.requirements.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-[11px] font-medium rounded-full border border-gray-200">
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {job.requirements.materialKnowledge && job.requirements.materialKnowledge.length > 0 && (
                                <div className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                  <div>
                                    <span className="font-semibold">Material Knowledge:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      {job.requirements.materialKnowledge.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-medium rounded-full border border-blue-100">
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Additional Sections: Traits & Benefits */}
                    {((job.traits && job.traits.length > 0) || (job.benefits && job.benefits.length > 0)) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 pt-10 border-t border-gray-50">
                        {job.traits && job.traits.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">
                              Key Traits
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.traits.map((trait, i) => (
                                <span key={i} className="px-4 py-2 bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-700 text-xs font-bold rounded-2xl border border-indigo-100">
                                  {trait}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {job.benefits && job.benefits.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">
                              Perks & Benefits
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {job.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                                    <span className="text-[10px] text-green-600 font-bold">✔</span>
                                  </div>
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Why Join Us & Detailed Description */}
                    <div className="space-y-10 pt-10 border-t border-gray-100">
                      {job.whyJoinUs && (
                        <div>
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">
                            Why Join Us?
                          </h4>
                          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium bg-blue-50/30 p-6 rounded-2xl border border-blue-100/50">
                            {job.whyJoinUs}
                          </p>
                        </div>
                      )}

                      {id && (
                        <div>
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6">
                            Job Description Summary
                          </h4>
                          <div className="prose prose-sm max-w-none text-gray-600 whitespace-pre-line leading-loose text-sm italic">
                            {job.description}
                          </div>
                        </div>
                      )}
                    </div>


                  </div>

                  {!id && (
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <button
                        onClick={() => handleApplyClick(job._id, job.title)}
                        className="px-8 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-black transition-all flex items-center gap-2 group/btn shadow-lg shadow-zinc-200"
                      >
                        Apply Now
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </div>

          {/* Job Application Form - Direct on page when ID is present */}
          {id && !loading && jobPosts.length > 0 && (
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="mb-6 md:mb-10 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 uppercase mb-2">
                  Apply for {selectedJobTitle}
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Fill in your details and we&apos;ll get back to you soon.
                </p>
              </div>

              <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-xl border border-gray-100">
                {applyError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm text-center">
                    {applyError}
                  </div>
                )}

                <form
                  onSubmit={handleApplicationSubmit}
                  className="space-y-8 md:space-y-10"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                    {/* Full Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        value={applyFullName}
                        onChange={(e) => {
                          setApplyFullName(e.target.value);
                          if (fieldErrors.fullName) {
                            setFieldErrors((prev) => ({
                              ...prev,
                              fullName: "",
                            }));
                          }
                        }}
                        className={`w-full bg-transparent border-b ${fieldErrors.fullName ? "border-red-500" : "border-gray-200"} py-3 text-gray-900 placeholder:text-gray-400 focus:border-black outline-none transition-colors text-base md:text-lg`}
                        placeholder="Enter full name"
                      />
                      {fieldErrors.fullName && (
                        <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                          {fieldErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                      <div
                        className={`flex items-center border-b ${fieldErrors.mobile ? "border-red-500" : "border-gray-200"} focus-within:border-black transition-colors`}
                      >
                        <span className="text-gray-400 text-base md:text-lg mr-2">
                          +91 -
                        </span>
                        <input
                          type="tel"
                          id="mobile"
                          value={applyMobile}
                          onChange={(e) => {
                            setApplyMobile(e.target.value);
                            if (fieldErrors.mobile) {
                              setFieldErrors((prev) => ({
                                ...prev,
                                mobile: "",
                              }));
                            }
                          }}
                          className="flex-1 bg-transparent py-3 text-gray-900 placeholder:text-gray-400 outline-none text-base md:text-lg"
                          placeholder="Enter mobile number"
                        />
                      </div>
                      {fieldErrors.mobile && (
                        <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                          {fieldErrors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Email ID */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={applyEmail}
                        onChange={(e) => {
                          setApplyEmail(e.target.value);
                          if (fieldErrors.email) {
                            setFieldErrors((prev) => ({
                              ...prev,
                              email: "",
                            }));
                          }
                        }}
                        className={`w-full bg-transparent border-b ${fieldErrors.email ? "border-red-500" : "border-gray-200"} py-3 text-gray-900 placeholder:text-gray-400 focus:border-black outline-none transition-colors text-base md:text-lg`}
                        placeholder="Enter email id"
                      />
                      {fieldErrors.email && (
                        <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Resume Upload */}
                    <div className="relative">
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`flex items-center justify-between border-b ${fieldErrors.resume ? "border-red-500" : "border-gray-200"} py-3 cursor-pointer hover:border-gray-400 focus-within:border-black transition-colors`}
                      >
                        <span
                          className={`text-base md:text-lg truncate mr-2 ${applyResume ? "text-gray-900" : "text-gray-400"}`}
                        >
                          {applyResume
                            ? applyResume.name
                            : "Upload your resume ( .pdf )"}
                        </span>
                        <Upload className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setApplyResume(e.target.files[0]);
                            if (fieldErrors.resume) {
                              setFieldErrors((prev) => ({
                                ...prev,
                                resume: "",
                              }));
                            }
                          }
                        }}
                      />
                      {fieldErrors.resume && (
                        <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                          {fieldErrors.resume}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-center pt-6">
                    <button
                      type="submit"
                      disabled={applyLoading}
                      className="w-full sm:min-w-[240px] sm:w-auto bg-black text-white text-base md:text-lg font-semibold py-3.5 md:py-4 px-12 rounded-full hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-zinc-200"
                    >
                      {applyLoading ? "Sending..." : "Apply Now"}
                    </button>
                    <p className="mt-4 text-xs text-gray-400 text-center">
                      By applying, you agree to our terms and privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}

          {!loading && totalPages > 1 && !id && (
            <div className="mt-16 flex justify-center">
              <PaginationComponent
                count={totalPages}
                page={page}
                onChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </section>

      {/* Modern Application Modal - Only when no ID */}
      <AnimatePresence>
        {!id && showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeForm}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 md:top-6 md:right-8 text-gray-400 hover:text-black transition-colors z-20 p-2 hover:bg-white rounded-full shadow-sm"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="mb-6 md:mb-10 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 uppercase mb-2">
                    Apply for {selectedJobTitle}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500">
                    Fill in your details and we&apos;ll get back to you soon.
                  </p>
                </div>

                <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-sm border border-gray-100/50">
                  {applyError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm text-center">
                      {applyError}
                    </div>
                  )}

                  <form
                    onSubmit={handleApplicationSubmit}
                    className="space-y-8 md:space-y-10"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                      {/* Full Name */}
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          value={applyFullName}
                          onChange={(e) => {
                            setApplyFullName(e.target.value);
                            if (fieldErrors.fullName) {
                              setFieldErrors((prev) => ({
                                ...prev,
                                fullName: "",
                              }));
                            }
                          }}
                          className={`w-full bg-transparent border-b ${fieldErrors.fullName ? "border-red-500" : "border-gray-200"} py-3 text-gray-900 placeholder:text-gray-400 focus:border-black outline-none transition-colors text-base md:text-lg`}
                          placeholder="Enter full name"
                        />
                        {fieldErrors.fullName && (
                          <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                            {fieldErrors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Mobile Number */}
                      <div className="relative">
                        <div
                          className={`flex items-center border-b ${fieldErrors.mobile ? "border-red-500" : "border-gray-200"} focus-within:border-black transition-colors`}
                        >
                          <span className="text-gray-400 text-base md:text-lg mr-2">
                            +91 -
                          </span>
                          <input
                            type="tel"
                            id="mobile"
                            value={applyMobile}
                            onChange={(e) => {
                              setApplyMobile(e.target.value);
                              if (fieldErrors.mobile) {
                                setFieldErrors((prev) => ({
                                  ...prev,
                                  mobile: "",
                                }));
                              }
                            }}
                            className="flex-1 bg-transparent py-3 text-gray-900 placeholder:text-gray-400 outline-none text-base md:text-lg"
                            placeholder="Enter mobile number"
                          />
                        </div>
                        {fieldErrors.mobile && (
                          <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                            {fieldErrors.mobile}
                          </p>
                        )}
                      </div>

                      {/* Email ID */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={applyEmail}
                          onChange={(e) => {
                            setApplyEmail(e.target.value);
                            if (fieldErrors.email) {
                              setFieldErrors((prev) => ({
                                ...prev,
                                email: "",
                              }));
                            }
                          }}
                          className={`w-full bg-transparent border-b ${fieldErrors.email ? "border-red-500" : "border-gray-200"} py-3 text-gray-900 placeholder:text-gray-400 focus:border-black outline-none transition-colors text-base md:text-lg`}
                          placeholder="Enter email id"
                        />
                        {fieldErrors.email && (
                          <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Resume Upload */}
                      <div className="relative">
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className={`flex items-center justify-between border-b ${fieldErrors.resume ? "border-red-500" : "border-gray-200"} py-3 cursor-pointer hover:border-gray-400 focus-within:border-black transition-colors`}
                        >
                          <span
                            className={`text-base md:text-lg truncate mr-2 ${applyResume ? "text-gray-900" : "text-gray-400"}`}
                          >
                            {applyResume
                              ? applyResume.name
                              : "Upload your resume ( .pdf )"}
                          </span>
                          <Upload className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setApplyResume(e.target.files[0]);
                              if (fieldErrors.resume) {
                                setFieldErrors((prev) => ({
                                  ...prev,
                                  resume: "",
                                }));
                              }
                            }
                          }}
                        />
                        {fieldErrors.resume && (
                          <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
                            {fieldErrors.resume}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-center pt-6">
                      <button
                        type="submit"
                        disabled={applyLoading}
                        className="w-full sm:min-w-[240px] sm:w-auto bg-black text-white text-base md:text-lg font-semibold py-3.5 md:py-4 px-12 rounded-full hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-zinc-200"
                      >
                        {applyLoading ? "Sending..." : "Apply Now"}
                      </button>
                      <p className="mt-4 text-xs text-gray-400 text-center">
                        By applying, you agree to our terms and privacy policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobOppeningNew;
