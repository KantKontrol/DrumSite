import React from "react";
import "./index.css"
import ProductCard from "../ProductCard";




export default function RandomProducts(){



    return (
        <div>
            <div className="row">
                <div className="col-12"><h4 className="title">Recently added...</h4></div>
            </div>
            <div className="row ran-prod-style">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
            </div>
        </div>
    );
}