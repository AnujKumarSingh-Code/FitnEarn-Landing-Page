import React from "react";
import yoga from "../assets/yoga.png";
import medi from "../assets/medi.png";
import girl from "../assets/girl.png";
import phy from "../assets/phy.png";
import rehab from "../assets/rehab.png";
import doctor from "../assets/doctor.png";
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
        <div className="flex items-center justify-center bg-zinc-900 py-10">
            <HoverEffect items={projects} />
        </div>
    );
}