"use client";

import React, { useRef, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create an Intersection Observer instance to auto-play/pause the video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .catch((err) => console.error("Error playing video:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Video plays if 50% or more is visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/footer.mp4" // Replace with your video file path
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      />

      {/* Transparent Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-4 text-gray-300">
                N1/187, IRC Village, Nayapalli, Bhubaneswar, Odisha -15
              </p>
              <p className="mb-4 text-gray-300">
                Phone:{" "}
                <a
                  href="tel:+918908012233"
                  className="underline hover:text-[#0553F1] transition"
                >
                  +91 890-801-2233
                </a>
              </p>
              <p className="text-gray-300">
                Email:{" "}
                <a
                  href="mailto:support@cayana.co.in"
                  className="underline hover:text-[#0553F1] transition"
                >
                  support@cayana.co.in
                </a>
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 hover:text-[#0553F1] transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 hover:text-[#0553F1] transition"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 hover:text-[#0553F1] transition"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#0553F1] transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#0553F1] transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#0553F1] transition"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#0553F1] transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#0553F1] transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Have a Question Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Have a Question</h3>
              <p className="mb-4 text-gray-300">
                If you have any questions, feel free to reach out. We're here to
                help and answer any queries you may have.
              </p>
              <p className="text-gray-300">
                Call us at:{" "}
                <a
                  href="tel:+918908012233"
                  className="underline hover:text-[#0553F1] transition"
                >
                  +91 890-801-2233
                </a>
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-zinc-200 pt-4 text-center">
            <p className="text-zinc-200 text-sm">
              &copy; {new Date().getFullYear()} Cayana Infratech Pvt. Ltd. All Rights Reserved. | Designed & Developed by{" "}
              <a
                href="https://vanurmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-[#0553F1]"
              >
                VANURTECH MEDIA PVT. LTD.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
