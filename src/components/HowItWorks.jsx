import React from "react";
import register from "../assests/register.png"
import verify from "../assests/verify.png"
import create from "../assests/create.png"
import engage from "../assests/engage.png"

const HowItWorks = () => {
  const steps = [
    { title: "Register", icon: register },
    { title: "Verify", icon: verify },
    { title: "Create Content", icon: create },
    { title: "Engage With Users", icon: engage },
  ];

  return (
    <section className="bg-[#2d1a17] text-white py-10 px-8">
      <h2 className="text-center text-6xl font-bold mb-8 mt-8">How It Works?</h2>

      <div className="relative flex flex-wrap justify-center">
        {steps.map((step, index) => (

          <div key={index} className="flex flex-col items-center w-80 p-4 m-4 bg-[#2d1a17] text-white rounded-lg">

            <img src={step.icon} alt={step.title} className="w-28 h-28 mb-4 hover:scale-110" />
            <h3 className="text-2xl font-bold">{step.title}</h3>
            <p className="text-lg text-gray-400 text-center mt-2">
              Support for multiple languages, making health monitoring accessible and
              easy for users around the globe.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
