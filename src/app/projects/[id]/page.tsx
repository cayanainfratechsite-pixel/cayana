"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Underline from "@/components/Underline";
import Gallery from "@/components/ProjectsPage/Gallery";
import { FaDownload } from "react-icons/fa";
import GetInTouch from "@/components/ProjectsPage/GetInTouch";
import StickyEnquiry from "@/components/ProjectsPage/StickyEnquiry";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnquiryModal from "@/components/ProjectsPage/EnquiryModal";

// Custom Next Arrow for Slider
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="top-1/2 right-0 z-10 absolute p-2 -translate-y-1/2 cursor-pointer transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bg-zinc-800 p-1 rounded-full w-8 h-8 text-zinc-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

// Custom Prev Arrow for Slider
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="top-1/2 left-0 z-10 absolute p-2 -translate-y-1/2 cursor-pointer transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bg-zinc-800 p-1 rounded-full w-8 h-8 text-zinc-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Are Nilachakra Elite projects legally approved?",
      answer: "Yes, Nilachakra Elite all projects have required approvals and RERA registration."
    },
    {
      question: "Is the land title clear?",
      answer: "Yes, all lands have clear and legally verified titles."
    },
    {
      question: "Is investing in holiday homes profitable?",
      answer: "Yes, due to strong tourism demand and appreciation potential in Puri."
    },
    {
      question: "Why invest in Puri?",
      answer: "Puri is a major spiritual and tourist hub with strong infrastructure growth."
    },
    {
      question: "Does Puri offer long-term returns?",
      answer: "Yes, supported by tourism, connectivity, and government initiatives."
    },
    {
      question: "Are home loans available?",
      answer: "Yes, leading banks provide home loans for our projects."
    },
    {
      question: "Will Cayana assist with loans?",
      answer: "Yes, we assist buyers in loan coordination and processing."
    },
    {
      question: "Are tax benefits available?",
      answer: "Yes, tax benefits apply as per Income Tax Act provisions."
    },
    {
      question: "Is rental income taxable?",
      answer: "Yes, rental income is taxable as per applicable laws."
    },
    {
      question: "Can NRIs buy Cayana properties?",
      answer: "Yes, NRIs and PIOs can invest as per RBI norms."
    },
    {
      question: "Are NRI home loans available?",
      answer: "Yes, Indian banks offer home loans to NRIs."
    },
    {
      question: "Does Cayana support NRIs?",
      answer: "Yes, we provide complete end-to-end NRI assistance."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-6 py-4 w-full text-left transition-colors duration-200"
          >
            <span className="font-medium text-zinc-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="bg-white px-6 py-4 border-gray-200 border-t">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const OverviewSlider = ({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick?: (imageUrl: string) => void;
}) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            className="px-2 cursor-pointer" // Horizontal padding to add gap between images
            onClick={() => onImageClick && onImageClick(imgUrl)}
          >
            <div className="flex justify-center items-center">
              <Image
                src={imgUrl}
                alt={`Overview Image ${idx + 1}`}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Page: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://backend.cayana.co.in/api/v1/project/${id}`)
      .then((response) => {
        if (response.data.success === 0) {
          setProject(response.data.result);
        }
      })
      .catch((error) => console.error("Error fetching project:", error))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDownloadClick = () => {
    setEnquiryOpen(true);
  };

  const onClose = () => {
    setEnquiryOpen(false);
  };

  const handleEnquirySubmit = () => {
    setEnquiryOpen(false); // Close the modal
    handleDownload(); // Trigger the download
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(project.brochureURL, {
        method: "GET",
      });

      // Check if the response is OK (status 200–299).
      if (response.ok) {
        const blob = await response.blob();

        // Create a temporary URL for the blob.
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Brochure.pdf"; // Set the filename for download.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the blob URL to free memory.
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to download file: ", response.statusText);
      }
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  if (loading) {
    return <div className="py-10 text-xl text-center">Loading...</div>;
  }

  if (!project) {
    return <div className="py-10 text-xl text-center">Project not found</div>;
  }

  return (
    <section className="relative">
      <div className="relative w-full h-[85vh]">
        {project._id === "67caecc0e7cbf9eb800249c3" ? (
          <video
            src={"/videos/Nilachakra Residency.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            objectFit="cover"
            className="z-0"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Black background container */}
        <div className="right-0 bottom-0 left-0 absolute bg-black/45 mx-3 sm:mx-auto mb-10 px-4 py-8 rounded-lg max-w-7xl">
          <motion.h1
            className="mb-2 font-bold text-zinc-100 text-xl sm:text-2xl uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="mb-2 text-zinc-100 text-sm sm:text-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.locationName}
          </motion.p>
          <div className="flex flex-wrap gap-3 md:gap-8">
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              RERA NO {project.basePrice}
            </motion.p>
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Type: {project.type}
            </motion.p>
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.size}
            </motion.p>
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="font-medium text-zinc-100 text-sm sm:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.bedRooms > 0
                ? "INR " + project.bedRooms + "/- ONWARDS"
                : "N/A"}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-28">
        <div className="px-4 sm:px-8 py-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
              Project Gallery
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.subContent}</p>
          </div>
        </div>

        <div>
          <Gallery images={project.gallery} />
        </div>

        {/* <div>
          <ProjectSection amenities={project.amenities} />
        </div> */}

        <div className="px-4 sm:px-8 py-8 text-center whitespace-pre-line">
          <div className="text-center">
            <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
              Details
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.details}</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="px-4 sm:px-8 py-8">
          <div className="mb-8 text-center">
            <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
              Location
            </h1>
            <Underline />
          </div>
          <div className="shadow-lg border border-gray-300 rounded-lg w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: project.locationEmbedURL }}
            ></div>
          </div>
        </div>
        {/* FAQ SECTION */}
        <div className="px-4 sm:px-8 py-8">
          <div className="mb-8 text-center">
            <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
              Frequently Asked Questions
            </h1>
            <Underline />
          </div>
          <div className="mx-auto max-w-4xl">
            <FAQSection />
          </div>
        </div>

        {/* <div className="px-4 sm:px-8 py-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
              Floor Structure
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.overview}</p>
          </div>
        </div>


        <div className="px-4 sm:px-8 py-8">
          <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl text-center uppercase">
          Floor Structure Images
          </h1>
          <Underline />
          <OverviewSlider images={project.overViewImage} onImageClick={(imgUrl) => setSelectedImage(imgUrl)} />
        </div> */}
      </div>

      {project._id !== "67caecc0e7cbf9eb800249c3" && (
        <div className="mb-8 text-center">
          {/* <h1 className="font-medium text-zinc-900 text-lg sm:text-xl md:text-2xl uppercase">
            Download Brochure
          </h1> */}
          {/* <Underline />
          <div className="flex justify-center">
            <button
              onClick={handleDownloadClick}
              className="flex justify-center items-center hover:bg-blue-700 px-4 py-2 rounded text-[#0553F1] hover:text-zinc-100 transition duration-300"
            >
              <FaDownload className="mr-2" />
              Download
            </button>
          </div> */}
        </div>
      )}

      <div>
        <GetInTouch projectId={id as string} />
      </div>

      <div>
        <StickyEnquiry projectId={id as string} />
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged Overview Image"
              width={700}
              height={200}
              className="rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="top-2 right-2 absolute bg-gray-800 px-2 rounded-full text-white"
            >
              X
            </button>
          </div>
        </div>
      )}

      {enquiryOpen && (
        <EnquiryModal
          projectId={id as string}
          onSuccess={handleEnquirySubmit}
          onClose={onClose}
        />
      )}
    </section>
  );
};

export default Page;
