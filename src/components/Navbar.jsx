import React from "react";
import fit from "../assests/fit.png";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-zinc-800">

      <div className="flex items-center">

        <img src={fit} alt="fit" className="h-12 w-12" />

        <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text ml-2">
          FitnEarnPal
        </h1>
      </div>


      <div className="flex items-center space-x-6 text-stone-300">
        <a href="/home" className="hover:underline text-xl">
          Home
        </a>
        <a href="/features" className="hover:underline text-xl">
          Features
        </a>
        <a href="/how-it-works" className="hover:underline text-xl">
          How It Works
        </a>
      </div>


      <div>
        <button className="relative inline-block px-0.5 py-0.5 font-bold text-white rounded-full bg-black">
          <span className="absolute inset-0 p-1 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full"></span>
          <span className="relative block bg-black rounded-full border border-transparent px-6 py-2">
            Sign Up Form
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
