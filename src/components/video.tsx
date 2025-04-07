"use client";

import React, { useRef, useEffect, useState } from "react";
import { FiVolumeX, FiVolume2 } from "react-icons/fi";

const VideosSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // Track mute state

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) =>
              console.error("Error playing video:", err)
            );
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    // Cleanup on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Toggle mute function
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <section className="w-full relative">
      <video
        ref={videoRef}
        src="/videos/Cayana Ad Video.mp4" // Replace with your video URL
        className="w-full h-auto object-contain"
        loop
        preload="none"
        muted={isMuted}
        poster="/images/cayana_thumbnail2.png"
        playsInline
      />
      {/* Toggle Sound Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
      </button>
    </section>
  );
};

export default VideosSection;
