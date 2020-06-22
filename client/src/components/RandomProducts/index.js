import React, { useState, useEffect } from "react";
import "./index.css"
import ProductCard from "../ProductCard";




export default function RandomProducts(){

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        let rendered = true; //add API util for this


        return () => rendered = false;
    }, []);

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