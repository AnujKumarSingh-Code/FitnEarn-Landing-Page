import React from "react";
import { motion } from "framer-motion";

export default function FloatingIcon({ title, image, description, place, isInView }) {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${place}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <img src={image} alt={image} className="w-28 h-28 p-4 rounded-full shadow-md mb-4" />
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="text-lg">{description}</p>
    </motion.div>
  );
}
