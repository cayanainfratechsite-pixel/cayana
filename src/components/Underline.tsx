"use client";

import React from "react";
import { motion } from "framer-motion";

interface UnderlineProps {
  maxWidth?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Underline: React.FC<UnderlineProps> = ({
  maxWidth = "250px",
  className = "",
  style = {},
}) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`h-[1px] bg-zinc-900 mb-12 mt-4 mx-auto ${className}`}
      style={{ maxWidth, ...style }}
    />
  );
};

export default Underline;
