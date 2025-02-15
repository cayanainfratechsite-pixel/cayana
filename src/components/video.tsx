"use client";

import React, { useRef, useEffect } from "react";

const VideosSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the video is at least 50% visible, play it
          if (entry.isIntersecting) {
            video.play().catch((err) =>
              console.error("Error playing video:", err)
            );
          } else {
            // Otherwise, pause the video
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(video);

    // Cleanup on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full relative">
      <video
        ref={videoRef}
        src="/videos/bg.mp4" // Replace with your video URL
        className="w-full h-auto object-contain"
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default VideosSection;
