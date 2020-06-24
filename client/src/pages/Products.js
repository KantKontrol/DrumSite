import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function Products(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let rendered = true;

        if(rendered){
            getProducts();
        }

        return rendered = false;
    });

    function getProducts(){
        API.getAllProducts().then(res => {
            setProducts(res.data);
        });
    }

    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}