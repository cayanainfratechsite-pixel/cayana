"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube ,FaMapMarkerAlt} from "react-icons/fa";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa6";

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
    <div className="relative overflow-hidden text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/Footer.mp4" // Replace with your video file path
        className="top-0 left-0 absolute w-full h-full object-cover"
        loop
        muted
        playsInline
      />

      {/* Transparent Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="z-10 relative px-4 pt-16 pb-6">
        <div className="mx-auto max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {/* Contact Info Column */}
            <div>
              <h3 className="mb-4 font-semibold text-2xl">Contact Us</h3>
                <p className="flex items-start gap-2 mb-4 max-w-xs text-gray-300">
                <FaMapMarkerAlt size={18} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No+N+1%2F187%2C+N1%2C+Block+N1%2C+IRC+Village%2C+Nayapalli%2C+Bhubaneswar%2C+Odisha+751015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0553F1] underline transition cursor-pointer"
                >
                  N1/187, IRC Village, Nayapalli, Bhubaneswar, Odisha -15
                </a>
                </p>
              <p className="flex items-center gap-2 mb-4 text-gray-300">
                {/* Phone:{" "} */}
                <FaPhone size={18} />
                <a
                  href="tel:+918908012233"
                  className="hover:text-[#0553F1] underline transition"
                >
                  +91 890-801-2233
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                {/* Email:{" "} */}
                <FaEnvelope size={18} />
                <Link
                  href="mailto:support@cayana.co.in"
                  className="hover:text-[#0553F1] underline transition"
                >
                  support@cayana.co.in
                </Link>
              </p>
              <div className="flex gap-4 mt-6">
                <Link
                  href="https://www.facebook.com/share/1C8jTgodqy/"
                  aria-label="Facebook"
                  className="bg-white bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full hover:text-[#0553F1] transition"
                >
                  <FaFacebookF size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/cayana_infratech?igsh=dWE3c3Z1N2NxYjI2"
                  aria-label="Instagram"
                  className="bg-white bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full hover:text-[#0553F1] transition"
                >
                  <FaInstagram size={18} />
                </Link>
                <Link
                  href="https://youtu.be/0VCjjqHLy2Y?si=CLYgU_cU9euHtdRG"
                  aria-label="YouTube"
                  className="bg-white bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full hover:text-[#0553F1] transition"
                >
                  <FaYoutube size={18} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/cayana-infratech-pvt-ltd/"
                  aria-label="LinkedIn"
                  className="bg-white bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full hover:text-[#0553F1] transition"
                >
                  <FaLinkedin size={18} />
                </Link>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="mb-4 font-semibold text-2xl">Quick Links</h3>
              <ul className="flex gap-12 space-y-3">
                <div className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/careers"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termsandcondition"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacypolicy"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emi-calculator"
                      className="text-gray-300 hover:text-[#0553F1] transition"
                    >
                      EMI Calculator
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            {/* Have a Question Column */}
            <div>
              <h3 className="mb-4 font-semibold text-2xl">Have a Question</h3>
              <p className="mb-4 text-gray-300">
                If you have any questions, feel free to reach out. We're here to
                help and answer any queries you may have.
              </p>
              {/* <p className="text-gray-300">
                Call us at:{" "}
                <a
                  href="tel:+918908012233"
                  className="hover:text-[#0553F1] underline transition"
                >
                  +91 890-801-2233
                </a>
              </p> */}

              <div>
                <p className="mb-2">Contact us at : </p>
                <p className="flex items-center gap-2 text-gray-300">
                  {/* Email:{" "} */}
                  {/* <FaEnvelope size={18} /> */}
                  <Link
                    href="mailto:support@cayana.co.in"
                    className="hover:text-[#0553F1] underline transition"
                  >
                    sales@cayana.co.in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-32 pt-4 border-zinc-200 border-t text-center">
            <p className="text-zinc-200 text-sm">
              &copy; Cayana Infratech Pvt. Ltd. All
              Rights Reserved
              {/* <a
                href="https://vanurmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-[#0553F1]"
              >
                VANURTECH MEDIA PVT. LTD.
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
