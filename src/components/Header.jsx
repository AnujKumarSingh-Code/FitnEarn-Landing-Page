import React from "react";
import mobile from "../assests/iphone.png";
import smile from "../assests/smile.png";
import { FaApple, FaGooglePlay, FaSmileWink } from "react-icons/fa";
import circle from "../assests/circle.png"
import heart from "../assests/heart.png"
import heartIcon from "../assests/heartIcon.png"
import man from "../assests/man.png"
import walk from "../assests/walk.png"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";



const Header = () => {
  const words = [

    {
      text: "Hey, Awesome Coach",
      className: "text-5xl font-bold mb-4 italic",
    },
  ]

  return (
    <header className="text-center bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-80">
        <div>

          <div className="inline-flex items-center gap-3 mt-40 ml-9">
            <img src={smile} alt="Smile Icon" />
            <TypewriterEffectSmooth words={words} />
          </div>

          <div className="mt-10 align-baseline text-left ml-40">
            <p className="text-4xl font-semibold inline-flex items-end">
              Expand Your Reach, Inspire More
            </p>
            <p className="text-4xl font-semibold">
              Lives{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
                Join FitnEarnPal Today!
              </span>
            </p>
          </div>

          <div className="text-2xl text-left ml-40 mt-10">
            <p>
              A global platform for coaches to connect, inspire, and
              change lives.
            </p>
          </div>

          <div className="ml-40 mt-10 grid grid-cols-2">

            <button href="/appleStore" className="flex items-center w-52 px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90">
              <FaApple className="w-10 h-10 mr-2" />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </button>


            <button href="/playStore" className="flex items-center w-52 px-5 py-2 w-30 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90">
              <FaGooglePlay className="w-10 h-10 mr-3" />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>


        <div className="mt-40">
          <div className="relative w-90 h-90 mr-20">


            <img src={circle} alt="circle" className="w-90 h-90 object-cover" />


            <img
              src={mobile}
              alt="mobile"
              className="absolute top-1/2 left-72 transform -translate-x-1/2 -translate-y-1/2 w-70 h-70 hover:opacity-80"
            />


            <div className="absolute top-1 left-1/5">
              
              <img
                src={heart}
                alt="heart"
                className="w-28 h-28  p-2 rounded-full shadow-md hover:scale-125"
              />

            </div>
            <div className="absolute top-1 left-96">
              <img
                src={heartIcon}
                alt="heartIcon"
                className="w-28 h-28 p-2 rounded-full shadow-md  hover:scale-125"
              />
            </div>
            <div className="absolute bottom-1/4 left-1/5">
              <img
                src={walk}
                alt="walk"
                className="w-28 h-28  p-2 rounded-full shadow-md  hover:scale-125"
              />
            </div>
            <div className="absolute bottom-1/4 left-96">
              <img
                src={man}
                alt="man"
                className="w-28 h-28  p-2 rounded-full shadow-md  hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
