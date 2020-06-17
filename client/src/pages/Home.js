import React from "react";
import Hero from "../components/Hero";
import RandomProducts from "../components/RandomProducts";

export default function Home(){

    return (
        <div className="">
            <Hero text="Welcome!" />
            <div className="row">
                <div className="col-1">

                    
                </div>
                <div className="col-10">
                    <RandomProducts />
                </div>
                <div className="col-1">

                                    
                </div>
            </div>
            
            
        </div>
    );
}