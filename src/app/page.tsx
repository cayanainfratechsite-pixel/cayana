"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Values from "@/components/Values";
import AboutUs from "@/components/AboutUs";
import VideosSection from "@/components/video";
import BlogSlider from "@/components/BlogSlider";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import FeaturedProjectsPopup from "@/components/FeaturedProjectsPopup";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds delay for better UX
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Values />
      <VideosSection />
      {/* <TestimonialsPage /> */}
      <BlogSlider />
      <Reviews />
      <FAQ />
      <Partners />

      {/* Features Projects Popup */}
      {showPopup && <FeaturedProjectsPopup onClose={handleClosePopup} />}
    </div>
  );
}
