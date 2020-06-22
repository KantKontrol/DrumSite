import React from "react";
import Hero from "../components/Hero";
import RandomProducts from "../components/RandomProducts";
import AboutJumbo from "../components/AboutJumbo";

export default function Home(){

    let aboutLead = "Laborum reprehenderit duis culpa minim minim enim veniam adipisicing ad laborum proident ut laborum sit.";
    let aboutBody = "Ea laborum est nisi laborum Lorem laborum magna ullamco labore quis ullamco eu. Elit veniam consectetur exercitation anim cupidatat tempor velit pariatur quis. Cillum culpa Lorem fugiat deserunt deserunt aute officia officia mollit occaecat adipisicing laboris excepteur. Labore sint officia pariatur cupidatat quis. Lorem quis officia qui non proident cillum labore dolore.";

    return (
        <div className="">
            <Hero text="Welcome!" />
            <div className="container no-padding">
                <RandomProducts />
                <AboutJumbo lead={aboutLead} about={aboutBody} href="/about"/>
            </div>
        </div>
    );
}