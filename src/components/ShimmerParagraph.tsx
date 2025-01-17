"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShimmerParagraphProps {
  text: string;
  className?: string;
}

const ShimmerText: React.FC<ShimmerParagraphProps> = ({ text, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.p
        className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/100 to-white/60"
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 100%",
        }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default ShimmerText;
