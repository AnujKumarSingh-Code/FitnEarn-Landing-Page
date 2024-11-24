import React, { useState, useEffect } from "react";
import coach from "../assests/coach.png";
import robert from "../assests/robert.png";
import anuj1 from "../assests/anuj1.jpg";
import FloatingIcon from "./FloatingIcon";


const CoachCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            image: anuj1,
            name: "Anuj",
            profession: "MERN Trainer",
            feedback:
                "Best MERN trainer but a little bit introvert but a very nice person with lots of humour",
            rating: 5,
            clients:[coach , coach , coach , robert , robert , robert]
        },
        {
            image: coach,
            name: "Coach Name",
            profession: "Yoga Trainer",
            feedback:
                "After Joining FitnEarnPal my audience reach has increased and I can work according to my time, which I liked the most.",
            rating: 4,
            clients:[anuj1 , anuj1 , anuj1 , robert , robert , robert]
        },
        {
            image: robert,
            name: "Robert",
            profession: "Yoga Trainer",
            feedback:
                "After Joining FitnEarnPal my audience reach has increased and I can work according to my time, which I liked the most.",
            rating: 3,
            clients:[coach , coach , coach , anuj1 , anuj1 , anuj1]
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);



    return (
        <div className="bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white py-10">
            <div className="text-center">
                <h2 className="text-6xl font-bold mb-4 mt-10">
                    What our{" "}
                    <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
                        Coach
                    </span>{" "}
                    Say
                </h2>
                <p className="text-4xl mt-8">
                    FitnEarnPal empowers coaches to grow and reach a global
                    <br /> audience while providing valuable health and fitness insights to
                    users.
                </p>
            </div>

            
            <div className="relative flex justify-center items-center mt-28 mb-24 w-full h-full">
                
                <div className="text-center max-w-lg">
                   
                    <div className="text-orange-500 text-3xl mb-2">
                        {"★".repeat(testimonials[currentIndex].rating)}
                    </div>

                   
                    <p className="text-xl mb-4">{testimonials[currentIndex].feedback}</p>

                    
                    <div className="flex justify-center mb-4">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-36 h-36 rounded-full hover:scale-125 hover:-translate-y-2"
                        />
                    </div>

                    
                    <h3 className="text-2xl font-semibold">{testimonials[currentIndex].name}</h3>
                    <p>{testimonials[currentIndex].profession}</p>
                </div>

                {/* could have been made reusable*/}
                
                <img
                    src={testimonials[currentIndex].clients[0]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full top-0 left-96  hover:scale-125 "
                />
                <img
                    src={testimonials[currentIndex].clients[1]}
                    alt="testimonial"
                    className="absolute w-24 h-24 rounded-full left-96 top-1/2 transform -translate-x-20 hover:scale-125 "
                />
                <img
                    src={testimonials[currentIndex].clients[2]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full bottom-0 left-96 transform -translate-y-[-96px] hover:scale-125 "
                />
                <img
                    src={testimonials[currentIndex].clients[3]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full top-0 right-96 hover:scale-125 hover:-translate-y-2"
                />
                <img
                    src={testimonials[currentIndex].clients[4]}
                    alt="testimonial"
                    className="absolute w-24 h-24 rounded-full top-1/2 right-96 transform -translate-x-[-20px] hover:scale-125 "
                />
                <img
                    src={testimonials[currentIndex].clients[5]}
                    alt="testimonial"
                    className="absolute w-20 h-20 rounded-full bottom-0 right-96 transform -translate-y-[-96px] hover:scale-125 "
                />
            </div>

            
            <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-6 h-6 rounded-full mx-1 ${currentIndex === index ? "bg-red-500" : "bg-gray-500"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CoachCarousel;
