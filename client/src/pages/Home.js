import React from "react";
import Hero from "../components/Hero";
import RandomProducts from "../components/RandomProducts";
import AboutJumbo from "../components/AboutJumbo";

export default function Home(){

    let aboutLead = "Drum decor made from used bass drums, toms, and snares.";
    let aboutBody = "Every piece of drum decor we make, is hand crafted to your liking. Drum decor can be made either from the drums we collect, or a drum you provide! All drum decor is crafted with a keen sense of detail, ready to spice up a living space, office, or to be a conversation piece.";

    return (
        <div className="">
            <Hero text="Welcome!" />
            <div className="container no-padding push-footer">
                <RandomProducts />
                <AboutJumbo title="About our decor" lead={aboutLead} about={aboutBody} href="/drums" atext="View Drums"/>
            </div>
        </div>
    );
}