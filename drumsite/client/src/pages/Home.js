import React from "react";
import Hero from "../components/Hero";
import RandomProducts from "../components/RandomProducts";

export default function Home(){

    return (
        <div className="container-fluid no-padding">
            <Hero text="Welcome!" />
            <div className="row">
                <div className="col-2">

                    
                </div>
                <div className="col-8">
                    <RandomProducts />
                </div>
                <div className="col-2">

                                    
                </div>
            </div>
            
            
        </div>
    );
}