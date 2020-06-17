import React from "react";
import Hero from "../components/Hero";
import RandomProducts from "../components/RandomProducts";

export default function Home(){

    return (
        <div className="">
            <Hero text="Welcome!" />
            <div className="container no-padding">
                <RandomProducts />
            </div>
        </div>
    );
}