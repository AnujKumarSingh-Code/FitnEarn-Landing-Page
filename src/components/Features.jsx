import React from "react";
import blog from "../assests/blog.png"
import live from "../assests/live.png"
import content from "../assests/content.png"
import workout from "../assests/workout.png"
import { HoverEffect } from "../ui/card-sliding-effect";



const Features = () => {
  const projects = [
    { title: "Blog Writing", imageSrc: blog, link:"", description:"Coach can write blogs"},
    { title: "Live Sessions", imageSrc: live, link:"", description:"Coach can create live sessions"},
    { title: "Content Creation", imageSrc: content, link:"", description:"Coach can create contents"},
    { title: "Workout Videos", imageSrc: workout, link:"", description:"Coach can create workout videos"},
  ];

  return (
    <section className="bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white py-10 px-8">
      <h2 className="text-center text-6xl font-bold mb-8 mt-8">Key Features</h2>
      
      <div className="relative flex flex-wrap justify-center">
        <HoverEffect items={projects} />
        
      </div>
    </section>
  );
};

export default Features;
