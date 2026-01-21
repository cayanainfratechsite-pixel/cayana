"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Underline from "@/components/Underline";
import ProjectSection from "@/components/ProjectsPage/ProjectSection";
import Gallery from "@/components/ProjectsPage/Gallery";
import { FaDownload } from "react-icons/fa";
import GetInTouch from "@/components/ProjectsPage/GetInTouch";
import StickyEnquiry from "@/components/ProjectsPage/StickyEnquiry";
import { useParams, useRouter } from "next/navigation";
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
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-zinc-100 bg-zinc-800 rounded-full p-1"
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
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-zinc-100 bg-zinc-800 rounded-full p-1"
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
                className="object-cover rounded-lg "
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
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [downloadaccess, setdownloadaccess] = useState(false);

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
    setdownloadaccess(true); // Grant access to download
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
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  if (!project) {
    return <div className="text-center py-10 text-xl">Project not found</div>;
  }

  return (
    <section className="relative">
      <div className="relative w-full h-[85vh]">
        {project._id === "67caecc0e7cbf9eb800249c3" ? (
          <video
            src={'/videos/Nilachakra Residency.mp4'}
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
        ) 
 }

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Black background container */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/45 mx-3 px-4 py-8 sm:mx-auto max-w-7xl mb-10 rounded-lg">
          <motion.h1
            className="text-xl text-zinc-100 sm:text-2xl uppercase font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-xl mb-2 text-zinc-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.locationName}
          </motion.p>
          <div className="flex gap-3 md:gap-8 flex-wrap">
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              RERA NO {project.basePrice}
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Type: {project.type}
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.size}
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              |
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl font-medium text-zinc-100"
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
        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
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

        <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Details
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.details}</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="py-8 px-4 sm:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Location
            </h1>
            <Underline />
          </div>
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg shadow-lg border border-gray-300">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: project.locationEmbedURL }}
            ></div>
          </div>
        </div>

        {/* <div className="py-8 px-4 sm:px-8 text-center whitespace-pre-line">
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              Floor Structure
            </h1>
            <Underline />
            <p className="text-zinc-900">{project.overview}</p>
          </div>
        </div>


        <div className="py-8 px-4 sm:px-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase text-center">
          Floor Structure Images
          </h1>
          <Underline />
          <OverviewSlider images={project.overViewImage} onImageClick={(imgUrl) => setSelectedImage(imgUrl)} />
        </div> */}
      </div>

      {project._id !== "67caecc0e7cbf9eb800249c3" && (
        <div className="mb-8 text-center">
          {/* <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
            Download Brochure
          </h1> */}
          {/* <Underline />
          <div className="flex justify-center">
            <button
              onClick={handleDownloadClick}
              className="flex items-center justify-center text-[#0553F1] hover:text-zinc-100 px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged Overview Image"
              width={700}
              height={200}
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 px-2   text-white bg-gray-800 rounded-full"
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
