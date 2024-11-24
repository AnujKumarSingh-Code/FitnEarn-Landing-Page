import React from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ip1 from "../assests/ip1.png";
import ip2 from '../assests/ip2.png';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white p-10 text-center ">
      <h1 className="text-6xl font-semibold mb-4 mt-14">Become <span className='text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text'>Coach </span> Tody</h1>

      <div class="relative flex items-center justify-center h-screen">

        <img
          src={ip1}
          alt="ip1"
          className="absolute transform rotate-[-8deg] translate-x-[-100px] rounded-lg hover:rotate-[-11deg]"

        />


        <img
          src={ip2}
          alt="ip2"
          className="absolute transform rotate-[8deg] translate-x-40 rounded-lg hover:rotate-[11deg]"
        />
      </div>


      <div className="flex item-center justify-center gap-10 mb-10">

        <motion.button
          className="flex items-center w-52 px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <FaApple className="w-10 h-10 mr-2" />
          <div className="text-left">
            <p className="text-xs">Download on the</p>
            <p className="text-xl font-semibold">App Store</p>
          </div>
        </motion.button>


        <motion.button
          className="flex hover:scale-110 items-center w-52 px-5 py-2 w-30 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <FaGooglePlay className="w-10 h-10 mr-3" />
          <div className="text-left">
            <p className="text-xs">Get it on</p>
            <p className="text-xl font-semibold">Google Play</p>
          </div>
        </motion.button>

      </div>
    </section>
  );
};

export default HeroSection;
