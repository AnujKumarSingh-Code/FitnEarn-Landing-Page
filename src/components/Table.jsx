import React from "react";
import yoga from "../assests/yoga.png";
import medi from "../assests/medi.png";
import girl from "../assests/girl.png";
import phy from "../assests/phy.png";
import rehab from "../assests/rehab.png";
import doctor from "../assests/doctor.png";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Table() {
    const projects = [
        {
            imageSrc: yoga,
            link: "",
            title: "",
            description: ""
        },
        {
            imageSrc: medi,
            link: "",
            title: "",
            description: ""
        },
        {
            imageSrc: girl,
            link: "",
            title: "",
            description: ""
        },
        {
            imageSrc: phy,
            link: "",
            title: "",
            description: ""
        },
        {
            imageSrc: rehab,
            link: "",
            title: "",
            description: ""
        },
        {
            imageSrc: doctor,
            link: "",
            title: "",
            description: ""
        },
    ];

    return (
        <div className="flex items-center justify-center bg-gradient bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 py-10">
            <HoverEffect items={projects} />
        </div>
    );
}
