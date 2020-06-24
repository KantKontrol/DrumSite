import React from "react";
import ProductCard from "../ProductCard";

export default function ProductDisplay(props){

    let { products } = props;

    return (
        <div>
            <div className="col-sm-2">

            </div>
            <div className="col-sm-10">
                <div className="row">
                    { products ? products.map(e => {
                        return <ProductCard key={e._id} image={e.image} title={e.title} desc={e.desc} price={e.price} />
                    }) : <h1>No Products to Display</h1>}
                </div>
            </div>
        </div>
    );
}