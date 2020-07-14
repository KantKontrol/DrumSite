import React from "react";
import ProductCard from "../ProductCard";
import "./index.css";

export default function ProductDisplay(props){

    let { products } = props;

    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="row">
                    { products ? products.map(e => {
                        return <ProductCard key={e._id} id={e._id} image={e.image} title={e.title} desc={e.desc} price={e.price} />
                    }) : <h1>No Products to Display</h1>}
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    );
}