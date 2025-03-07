"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

type BurstPosition = { top: string; left: string };

// -------------------------
// Confetti Component – Spread party paper across the screen
// -------------------------
const Confetti = () => {
  const numberOfPieces = 50;
  const pieces = useMemo(() => {
    return Array.from({ length: numberOfPieces }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 3;
      const size = 4 + Math.random() * 8;
      const initialRotation = Math.random() * 360;
      const driftX = Math.random() * 40 - 20;
      const driftY = Math.random() * 40 - 20;
      const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
      const background = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: i,
        left,
        top,
        delay,
        duration,
        size,
        initialRotation,
        driftX,
        driftY,
        background,
      };
    });
  }, []);

  return (
    <>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.background,
            borderRadius: "50%",
            opacity: 0.8,
          }}
          initial={{ x: 0, y: 0, rotate: piece.initialRotation }}
          animate={{
            x: [0, piece.driftX, 0],
            y: [0, piece.driftY, 0],
            rotate: [piece.initialRotation, piece.initialRotation + 360],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// -------------------------
// CrackerBurst Component – Creates a burst effect at a specified position
// -------------------------
const CrackerBurst = ({ position }: { position: BurstPosition }) => {
  const numberOfBurstPieces = 50;
  const burstPieces = useMemo(() => {
    return Array.from({ length: numberOfBurstPieces }).map((_, i) => {
      const angle = Math.random() * 360;
      const distance = 500 + Math.random() * 150;
      const x = distance * Math.cos(angle * (Math.PI / 180));
      const y = distance * Math.sin(angle * (Math.PI / 180));
      const size = 8 + Math.random() * 4;
      const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
      const background = colors[Math.floor(Math.random() * colors.length)];
      return { id: i, x, y, size, background };
    });
  }, []);

  return (
    <div
      className="absolute"
      style={{ top: position.top, left: position.left }}
    >
      {burstPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-full"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.background,
          }}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 0, x: piece.x, y: piece.y, scale: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

// -------------------------
// Main ComingSoon Component
// -------------------------
export default function ComingSoon() {
  const [launched, setLaunched] = useState(false);
  const [bursts, setBursts] = useState<BurstPosition[]>([]);
  const [timer, setTimer] = useState(15);

  // Helper function to format seconds as HH:MM:SS
  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Countdown timer effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleLaunch = () => {
    setLaunched(true);
    const newBursts = Array.from({ length: 6 }).map(() => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }));
    setBursts(newBursts);
  };

  // Redirect function (update URL to your actual website)
  const redirectToWebsite = () => {
    window.location.href = "https://www.cayana.co.in/";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Gradient Overlay & Blur Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-2xl"
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-atmosphere-grand-opening-red-background-uptechnologygrand-opening-background-image_71530.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 opacity-70"></div>
      </div>

      {/* Confetti – Spreading party paper across the screen */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Confetti />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center space-y-6 text-center px-4">
        {/* Logo Section */}
        <div className="mb-8">
          <Image
            src="/images/CAYANA.png"
            alt="Cayana Infratech Logo"
            width={300}
            height={70}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white font-poppins"
        >
          Welcome to Cayana Infratech: Shaping the Future of Real Estate
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold text-white font-poppins"
        >
          A New Era in Innovation & Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-200 font-poppins max-w-4xl"
        >
          At Cayana Infratech, we blend visionary design with state-of-the-art
          technology to create exceptional living and commercial spaces. Our
          commitment to quality, sustainability, and innovation drives us to
          deliver projects that not only elevate the real estate landscape but
          also redefine modern living. Join us as we pave the way for a new era
          in property development.
        </motion.p>

        {!launched ? (
          timer > 0 ? (
            <div className="text-center">
              <div className="text-white text-lg font-poppins mb-2">
                Launching in
              </div>
              <div className="bg-black/30 backdrop-blur-md inline-block rounded-lg p-4">
                <div
                  className="text-white font-mono text-5xl tracking-widest"
                  style={{ textShadow: "0 0 8px #fff" }}
                >
                  {formatTime(timer)}
                </div>
              </div>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9, rotate: -2 }}
              onClick={handleLaunch}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-xl font-poppins"
            >
              Launch Website
            </motion.button>
          )
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <motion.p
                className="text-4xl font-bold text-white font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                🎉 We are Live 🎉
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9, rotate: -2 }}
                onClick={redirectToWebsite}
                className="mt-6 px-8 py-1  text-yellow-400 underline font-semibold font-poppins text-md"
              >
                Visit Website
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Cracker Burst Effects – Multiple bursts on launch */}
      <AnimatePresence>
        {launched &&
          bursts.map((burst) => (
            <motion.div
              key={burst.top + burst.left}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute z-30 pointer-events-none"
            >
              <CrackerBurst position={burst} />
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Social Media Icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 z-30">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-indigo-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-indigo-400"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-indigo-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-indigo-400"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
