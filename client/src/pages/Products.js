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
      /*  API.getAllProducts().then(res => {
            setProducts(res.data);
        }); */
        let data = API.getAllProducts();
        setProducts(data);
    }

    return (
        <div className="container-fluid push-footer">
            <h1 className="mx-auto product-page-header" style={{ width: "fit-content" }}>Drum Decor</h1>
            <div className="lineBreak"></div>
            {products.length > 0 ? <ProductDisplay products={products}/> : <img className="preloader" src="/images/preloader.gif" alt="Loading..." width="80px"></img>}
        </div>
    );
}