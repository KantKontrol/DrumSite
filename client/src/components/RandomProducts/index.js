import React from "react";
import "./index.css"
import ProductCard from "../ProductCard";




export default function RandomProducts(){



    return (
        <div className="row ran-prod-style">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}