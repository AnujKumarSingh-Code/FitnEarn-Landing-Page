import React from "react";

export default function FloatingImages({image , styling}){
    return (
        <img src={image} className={styling}/>
    )
}