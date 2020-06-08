import React from "react";
import "./index.css"
import ProductCard from "../ProductCard";




export default function RandomProducts(){



    return (
        <div className="ran-prod-style">

            <div className="product-area">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    );
}