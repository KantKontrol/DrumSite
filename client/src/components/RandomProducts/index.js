import React, { useState, useEffect } from "react";
import "./index.css";
import API from "../../utils/API";
import ProductCard from "../ProductCard";


export default function RandomProducts(){

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        let rendered = true; //add API util for this

        if(rendered){
            getLatestProducts();
        }

        return () => rendered = false;
    }, []);

    function getLatestProducts(){
        /*API.getLatestProducts().then(res => {
            setLatestProducts(res.data);
        });*/
        let data = API.getLatestProducts();
        setLatestProducts(data);
    }

    return (
        <div>
            <div className="row">
                <div className="col-12" style={{ marginTop: 10 + "px" }}><h4 className="title">Recently added...</h4></div>
            </div>
            <div className="row ran-prod-style">
                { latestProducts.length > 0 ? latestProducts.map(e => {
                    return <ProductCard displayEven={true} key={e._id} id={e._id} image={e.image} title={e.title} desc={e.desc} price={e.price} />
                }) : <div></div> }
            </div>
        </div>
    );
}