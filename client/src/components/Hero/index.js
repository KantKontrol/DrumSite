import React from "react";
import "./index.css";

export default function Hero(props){

    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>{props.text}</h1>
                </div>
            </div>
        </div>
    );
}