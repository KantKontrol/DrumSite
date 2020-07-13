import React, { useState, useEffect } from "react";
import ProductDisplay from "../components/ProductDisplay";
import API from "../utils/API";

export default function Products(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let rendered = true;

        if(rendered){
           getProducts();
        }

        return () => rendered = false;
    }, []);

    function getProducts(){
        API.getAllProducts().then(res => {
            setProducts(res.data);
        });
    }

    return (
        <div>
            <h1>Products</h1>

            {products.length > 0 ? <ProductDisplay products={products}/> : <img className="preloader" src="/images/preloader.gif" alt="Loading..." width="80px"></img>}
            
        </div>
    );
}