import React from "react";
import ProductCard from "../ProductCard";

export default function ProductDisplay(props){

    let { products } = props;

    return (
        <div>
            { products ? products.map(e => {
                return <ProductCard />;
            }) : <h1>No Products to Display</h1>}

        </div>
    );
}