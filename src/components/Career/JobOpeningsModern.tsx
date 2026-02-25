import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PaginationComponent from "../Pagination";
import { fetchJobPosts, submitJobApplication } from "@/api/jobPosts/page";
import {
    Search,
    Upload,
    X,
    MapPin,
    Briefcase,
    Clock,
    ChevronRight,
} from "lucide-react";

export interface JobPosts {
    _id: string;
    title: string;
    description: string;
    location?: string;
    type?: string;
    experience?: string;
}

interface JobPostsResponse {
    success: number;
    message?: string;
    result: {
        jobs: JobPosts[];
        totalPages: number;
    };
}

const JobOpeningsModern = () => {
    const router = useRouter();
    const [jobPosts, setJobPosts] = useState<JobPosts[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState("");

    // General Form States
    const [generalName, setGeneralName] = useState("");
    const [generalEmail, setGeneralEmail] = useState("");
    const [generalMobile, setGeneralMobile] = useState("");
    const [generalRole, setGeneralRole] = useState("");
    const [generalResume, setGeneralResume] = useState<File | null>(null);
    const generalFileRef = useRef<HTMLInputElement>(null);

    const [applyLoading, setApplyLoading] = useState(false);
    const [applyError, setApplyError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

    const validateGeneralForm = () => {
        const errors: { [key: string]: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!generalName.trim()) errors.fullName = "Full name is required";
        if (!generalEmail.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(generalEmail)) {
            errors.email = "Please enter a valid email address";
        }
        if (!generalMobile.trim()) {
            errors.mobile = "Mobile number is required";
        } else if (!phoneRegex.test(generalMobile.replace(/\D/g, ""))) {
            errors.mobile = "Please enter a valid 10-digit mobile number";
        }
        if (!generalRole.trim()) errors.role = "Desired role is required";
        if (!generalResume) errors.resume = "Please upload your resume";

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        const fetchJobPostsData = async () => {
            setLoading(true);
            try {
                const data: JobPostsResponse = await fetchJobPosts(page);
                if (data.success == 0) {
                    setJobPosts(data.result.jobs);
                    setTotalPages(data.result.totalPages);
                } else {
                    setError(data.message || "Failed to fetch jobs");
                }
            } catch (error) {
                setError(error instanceof Error ? error.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchJobPostsData();
    }, [page]);

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

    const handleApplyClick = (jobId: string) => {
        router.push(`/careers-new/job/${jobId}`);
    };

    const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateGeneralForm()) {
            return;
        }

        setApplyLoading(true);
        setApplyError(null);
        try {
            const formData = new FormData();
            formData.append("fullName", generalName);
            formData.append("email", generalEmail);
            formData.append("mobile", generalMobile);
            formData.append("role", generalRole);
            if (generalResume) {
                formData.append("resume", generalResume);
            }
            formData.append("message", "General application for: " + generalRole);

            const response = await submitJobApplication(formData);
            if (response && response.data) {
                console.log("General Application Response:", response.data);
            }
            alert("General application submitted successfully!");
            setGeneralName("");
            setGeneralEmail("");
            setGeneralMobile("");
            setGeneralRole("");
            setGeneralResume(null);
            setFieldErrors({});
        } catch (error) {
            console.error("General application error:", error);
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
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 mb-6 text-sm md:text-base font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100/50 rounded-full"
                        >
                            Career Roles
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight text-center">
                            Work With Us
                        </h2>
                        <div className="mt-4 w-24 h-1.5 bg-blue-600 rounded-full"></div>
                        <p className="mt-6 text-gray-600 text-center max-w-2xl text-lg">
                            Be part of a team that empowers innovation and fosters growth.
                            Find your next challenge and grow with us.
                        </p>
                    </div>

                    {/* Ultra Minimalist Search Section */}
                    <div className="max-w-3xl mx-auto mb-20 px-4">
                        <div className="relative group">
                            {/* Animated Background Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[30px] blur opacity-10 group-focus-within:opacity-20 transition duration-1000 group-focus-within:duration-200"></div>

                            <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 p-1.5 rounded-[32px] shadow-2xl shadow-blue-500/10">
                                <div className="relative flex items-center">
                                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                                        <Search
                                            className={`w-6 h-6 transition-all duration-300 ${searchTerm ? "text-blue-600 scale-110" : "text-gray-400 group-focus-within:text-blue-600"}`}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search for your dream job..."
                                        className="w-full bg-transparent py-6 pl-16 pr-14 text-zinc-900 outline-none placeholder:text-gray-400 text-xl font-medium"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm("")}
                                            className="absolute right-6 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {loading ? (
                            Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-8 rounded-[32px] shadow-sm animate-pulse border border-gray-100"
                                >
                                    <div className="h-8 bg-gray-200 rounded-full w-3/4 mb-6"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-full mb-3"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                                </div>
                            ))
                        ) : error ? (
                            <div className="col-span-full py-16 text-center bg-red-50/50 backdrop-blur-sm rounded-[40px] border border-red-100">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <X className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                                <p className="text-red-600 font-medium mb-8 max-w-md mx-auto">{error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 active:scale-95"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : jobPosts.length === 0 ? (
                            <div className="col-span-full py-20 text-center bg-white rounded-3xl shadow-sm border border-gray-100">
                                <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    No vacancies right now
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    Check back later or follow us for updates.
                                </p>
                            </div>
                        ) : (
                            jobPosts
                                .filter((job) =>
                                    job.title.toLowerCase().includes(searchTerm.toLowerCase()),
                                )
                                .map((job) => (
                                    <motion.div
                                        key={job._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="group relative bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-blue-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                                    >
                                        {/* Decorative element */}
                                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-colors duration-500" />

                                        <div className="relative">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-blue-100">
                                                    {job.type || "Full Time"}
                                                </span>
                                            </div>

                                            <div className="mb-6">
                                                <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors leading-tight bg-zinc-50 px-4 py-4 rounded-2xl border border-zinc-100 group-hover:border-blue-100 group-hover:bg-blue-50/30">
                                                    {job.title}
                                                </h3>
                                            </div>

                                            <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500 font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                                                    <span>{job.location || "Remote / Office"}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                                                    <span>{job.experience || "2-5 Yrs"}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative pt-6 border-t border-gray-50 mt-4">
                                            <button
                                                onClick={() => handleApplyClick(job._id)}
                                                className="w-full py-3.5 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-zinc-100 hover:shadow-blue-200"
                                            >
                                                Apply Now
                                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                        )}
                    </div>


                    {!loading && totalPages > 1 && (
                        <div className="mt-16 flex justify-center">
                            <PaginationComponent
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                            />
                        </div>

                    )}
                    {/* General Application Section (Static Form)  */}
                    <div className="mt-20 max-w-5xl mx-auto">
                        <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-xl shadow-zinc-200/40 border border-gray-100">
                            <div className="mb-6">
                                <h3 className="text-3xl md:text-[40px] font-bold text-zinc-900 mb-4 tracking-tight">
                                    Don&apos;t see the right role?
                                </h3>
                                <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
                                    We&apos;re always on the lookout for exceptional talent. If you don&apos;t see a current opening that matches your profile, share your resume with us, and we&apos;ll reach out when the right opportunity arises.
                                </p>
                            </div>

                            <form onSubmit={handleGeneralSubmit} className="space-y-6" noValidate>
                                <div className="space-y-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="What should we call you?"
                                            className={`w-full bg-transparent border-b ${fieldErrors.fullName ? "border-red-500" : "border-gray-100"} py-3 text-sm md:text-base outline-none focus:border-black transition-colors placeholder:text-gray-300`}
                                            value={generalName}
                                            onChange={(e) => {
                                                setGeneralName(e.target.value);
                                                if (fieldErrors.fullName) {
                                                    setFieldErrors((prev) => ({ ...prev, fullName: "" }));
                                                }
                                            }}
                                        />
                                        {fieldErrors.fullName && (
                                            <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] md:text-xs">
                                                {fieldErrors.fullName}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                                        <div className="relative">
                                            <div className={`flex items-center border-b ${fieldErrors.mobile ? "border-red-500" : "border-gray-100"} focus-within:border-black transition-colors`}>
                                                <span className="text-gray-400 text-sm md:text-base mr-2">+91 -</span>
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="flex-1 bg-transparent py-3 text-sm md:text-base outline-none placeholder:text-gray-300"
                                                    value={generalMobile}
                                                    onChange={(e) => {
                                                        setGeneralMobile(e.target.value);
                                                        if (fieldErrors.mobile) {
                                                            setFieldErrors((prev) => ({ ...prev, mobile: "" }));
                                                        }
                                                    }}
                                                />
                                            </div>
                                            {fieldErrors.mobile && (
                                                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] md:text-xs">
                                                    {fieldErrors.mobile}
                                                </p>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className={`w-full bg-transparent border-b ${fieldErrors.email ? "border-red-500" : "border-gray-100"} py-3 text-sm md:text-base outline-none focus:border-black transition-colors placeholder:text-gray-300`}
                                                value={generalEmail}
                                                onChange={(e) => {
                                                    setGeneralEmail(e.target.value);
                                                    if (fieldErrors.email) {
                                                        setFieldErrors((prev) => ({ ...prev, email: "" }));
                                                    }
                                                }}
                                            />
                                            {fieldErrors.email && (
                                                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] md:text-xs">
                                                    {fieldErrors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Role & Resume */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Desired Role"
                                                className={`w-full bg-transparent border-b ${fieldErrors.role ? "border-red-500" : "border-gray-100"} py-3 text-sm md:text-base outline-none focus:border-black transition-colors placeholder:text-gray-300`}
                                                value={generalRole}
                                                onChange={(e) => {
                                                    setGeneralRole(e.target.value);
                                                    if (fieldErrors.role) {
                                                        setFieldErrors((prev) => ({ ...prev, role: "" }));
                                                    }
                                                }}
                                            />
                                            {fieldErrors.role && (
                                                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] md:text-xs">
                                                    {fieldErrors.role}
                                                </p>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <div
                                                onClick={() => generalFileRef.current?.click()}
                                                className={`flex items-center justify-between border-b ${fieldErrors.resume ? "border-red-500" : "border-gray-100"} py-3 cursor-pointer hover:border-black transition-colors`}
                                            >
                                                <span
                                                    className={`text-sm md:text-base truncate ${generalResume ? "text-gray-900" : "text-gray-300"}`}
                                                >
                                                    {generalResume
                                                        ? generalResume.name
                                                        : "Upload your resume ( .pdf )"}
                                                </span>
                                                <Upload className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                ref={generalFileRef}
                                                type="file"
                                                accept=".pdf"
                                                className="hidden"
                                                onChange={(e) => {
                                                    if (e.target.files?.[0]) {
                                                        setGeneralResume(e.target.files[0]);
                                                        if (fieldErrors.resume) {
                                                            setFieldErrors((prev) => ({ ...prev, resume: "" }));
                                                        }
                                                    }
                                                }}
                                            />
                                            {fieldErrors.resume && (
                                                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] md:text-xs">
                                                    {fieldErrors.resume}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center pt-2">
                                    <button
                                        type="submit"
                                        disabled={applyLoading}
                                        className="w-full md:w-auto min-w-[240px] bg-black text-white text-sm md:text-base font-bold py-3.5 px-12 rounded-full hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 active:scale-95 disabled:opacity-70"
                                    >
                                        {applyLoading ? "Sending..." : "Apply Now"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default JobOpeningsModern;
