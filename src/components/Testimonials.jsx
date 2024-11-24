import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ip3 from "../assests/ip3.png"
import circle from "../assests/circle.png"
import FloatingIcon from "./FloatingIcon";
import global from "../assests/global.png"
import personal from "../assests/personal.png"
import revenue from "../assests/revenue.png"
import cal from "../assests/cal.png"




export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  return (
    <section
      className="bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white p-10 text-center"
      ref={ref}
    >
      <motion.h1
        className="text-center text-6xl font-semibold mt-14"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        What Our{" "}
        <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
          Coach
        </span>{" "}
        Say
      </motion.h1>
      <motion.p
        className="text-center text-gray-200 mt-5 mb-10 ml-96 mr-96 text-4xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        FitnEarnPal empowers coaches to grow and reach a global audience while
        providing valuable health and fitness insights to users.
      </motion.p>

      <div className="relative flex items-center justify-center mt-52 mb-28">
        <motion.img
          src={circle}
          alt="circle"
          className="w-[500px] h-[500px] object-cover rotating-circle"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
          transition={{ duration: 1.5 }}
        />

        <motion.img
          src={ip3}
          alt="mobile"
          className="absolute ml-24 translate-x-11 translate-y-[-1px] w-70 h-70 hover:opacity-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <FloatingIcon
          image={global}
          title="Global Audience Access"
          description="Helps you gain global audience"
          place="absolute -top-10 left-52 ml-52 floating-icon"
          isInView={isInView}
        />
        <FloatingIcon
          image={personal}
          title="Personal Brand"
          description="Helps you gain global audience"
          place="absolute -top-10 right-52 mr-52 floating-icon"
          isInView={isInView}
        />
        <FloatingIcon
          image={revenue}
          title="Revenue Opportunities"
          description="Helps you gain global audience"
          place="absolute bottom-10 left-52 ml-52 floating-icon"
          isInView={isInView}
        />
        <FloatingIcon
          image={cal}
          title="Work on Your Own Schedule"
          description="Helps you gain global audience"
          place="absolute bottom-10 right-52 mr-52 floating-icon"
          isInView={isInView}
        />
      </div>
    </section>
  );
}