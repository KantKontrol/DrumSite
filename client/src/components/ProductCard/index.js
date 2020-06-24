import React, {useContext} from "react";
import "./index.css";
import GlobalContext from "../../utils/GlobalContext";

export default function ProductCard(props){ 

    const { addToCart } = useContext(GlobalContext);


    return(
        <div className={ props.displayEven ? "product-card col-sm" : "product-card col-xs-12 col-sm-12 col-md-3 col-lg-3"}>
            <img src={props.image ? props.image : "https://via.placeholder.com/50"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="product-card-title">{props.title ? props.title : "Sample Text"}</h5>
                <p className="product-card-text">{props.desc ? props.desc : "Description of product here"}</p>
                <p>{ "$" + props.price}</p>
                <a href="#" onClick={() => { addToCart()} } className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
}