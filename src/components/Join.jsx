import React from "react";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "../ui/text-reveal-card";

export default function Join() {
    return (
        <div className="text-center bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white py-10">
            <div className="item-center mt-20 ml-72 mr-72">
                <h1 className="font-semibold text-6xl">
                    Join growing community of Coaches
                </h1>

                <TextRevealCard
                    text="FitnEarnPal is your gateway to connect with a global community of health and fitness enthusiasts, share experience and valuable knowledge, and grow their audience. As a coach you have the power to inspire, educate and motivate users worldwide by creating and sharing impactful content, workout videos, conducting live sessions and much more."
                    revealText="FitnEarnPal is your gateway to connect with a global community of health and fitness enthusiasts, share experience and valuable knowledge, and grow their audience. As a coach you have the power to inspire, educate and motivate users worldwide by creating and sharing impactful content, workout videos, conducting live sessions and much more. "
                >
                </TextRevealCard>



                <div className="mt-16">
                    <button  className="text-xl w-56 h-16 px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-80">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
}
