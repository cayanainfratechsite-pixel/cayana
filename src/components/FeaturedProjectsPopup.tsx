import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface FeaturedProjectsPopupProps {
  onClose: () => void;
}

const FeaturedProjectsPopup: React.FC<FeaturedProjectsPopupProps> = ({
  onClose,
}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Default featured projects
  const defaultProjects = [
    {
      _id: "1",
      name: "Nilachakra Elite",
      description:
        "Nilachakra Elite is a premium residential project in Puri, Odisha, developed by Cayana Infratech Pvt. Ltd. Featuring seven well-designed towers with 180 one-bedroom and 80 two-bedroom apartments, the project offers modern living with elegance and sophistication. World-class amenities include a three-story clubhouse, swimming pool, gym, landscaped gardens, and 24/7 security. With superior construction quality and strategic location, Nilachakra Elite provides the perfect blend of comfort, convenience, and modern lifestyle for families and professionals. 180 one bedroom (1BHK), 80 two bedroom (2BHK)",

      location: "Puri, Odisha",
      image: "/images/Projects/nilachakra.webp",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden"],
    },
  ];

  const currentProject = defaultProjects[currentProjectIndex];

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    if (defaultProjects.length > 1) {
      const interval = setInterval(() => {
        setCurrentProjectIndex((prev) => (prev + 1) % defaultProjects.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [defaultProjects.length]);

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % defaultProjects.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? defaultProjects.length - 1 : prev - 1,
    );
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="z-50 fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup Modal - Centered */}
      <div
        className="top-1/2 left-1/2 z-50 fixed transition-all -translate-x-1/2 -translate-y-1/2 duration-300 ease-out transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white shadow-2xl border border-gray-100 rounded-3xl w-[95vw] max-w-2xl sm:max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="top-4 right-4 z-10 absolute bg-white/90 hover:bg-white shadow-lg p-2 rounded-full text-gray-600 hover:text-gray-800 hover:scale-110 transition-all duration-200"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            {currentProject && (
              <div className="space-y-8 sm:space-y-10">
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Column - Details */}
                  <div className="flex flex-col justify-center space-y-6">
                    {/* Project Name */}
                    <div>
                      <h2 className="mb-2 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        {currentProject.name}
                      </h2>
                    </div>

                    {/* Location */}
                    {currentProject.location && (
                      <div className="flex items-center">
                        <svg
                          className="mr-3 w-5 h-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <p className="font-medium text-gray-600 text-lg">
                          {currentProject.location}
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    <p className="font-light text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Right Column - Large Image */}
                  <div className="order-first lg:order-last">
                    <div className="relative bg-gray-100 shadow-xl rounded-2xl overflow-hidden">
                      <img
                        src={currentProject.image}
                        alt={currentProject.name}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                {defaultProjects.length > 1 && (
                  <div className="flex justify-center items-center space-x-2 py-4 border-gray-100 border-t">
                    {defaultProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProjectIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentProjectIndex
                            ? "bg-blue-600 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex sm:flex-row flex-col gap-3 pt-4">
                  <button
                    onClick={() => {
                      handleClose();
                      // Navigate to project details - you can replace with actual navigation
                      window.location.href = "/projects";
                    }}
                    className="group flex flex-1 justify-center items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition-colors duration-200"
                  >
                    Know More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                  </button>

                  <button
                    onClick={() => {
                      handleClose();
                      // Navigate to all projects - you can replace with actual navigation
                      window.location.href = "/projects";
                    }}
                    className="flex-1 hover:bg-blue-50 px-6 py-3 border-2 border-blue-600 rounded-lg font-medium text-blue-600 text-center transition-colors duration-200"
                  >
                    View All Projects
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows for multiple projects */}
          {defaultProjects.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="top-1/2 left-2 absolute bg-white/90 hover:bg-white shadow-lg p-2 rounded-full text-gray-700 hover:scale-110 transition-all -translate-y-1/2 duration-200 transform"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={handleNext}
                className="top-1/2 right-2 absolute bg-white/90 hover:bg-white shadow-lg p-2 rounded-full text-gray-700 hover:scale-110 transition-all -translate-y-1/2 duration-200 transform"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedProjectsPopup;
