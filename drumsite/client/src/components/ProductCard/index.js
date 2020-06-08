import React from "react";
import "./index.css";


export default function ProductCard(props){

    return(
        <div className="card" >
            <img src={props.image ? props.image : "https://via.placeholder.com/50"} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.title ? props.title : "Sample Text"}</h5>
                <p className="card-text">{props.desc ? props.desc : "Description of product here"}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
}