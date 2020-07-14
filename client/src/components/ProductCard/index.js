import React, {useContext} from "react";
import "./index.css";
import GlobalContext from "../../utils/GlobalContext";

export default function ProductCard(props){ 

    const { addToCart } = useContext(GlobalContext);
    const {id, displayEven, title, image, desc, price} = props;
    //product-card col-xs-12 col-sm-12 col-md-5 col-lg-5

    return(
        <div className={ displayEven ? "product-card col-sm" : "product-card col-sm-12 col-lg-6"}>
            <img src={image ? image : "https://via.placeholder.com/50"} className="card-img-top" alt="..." />
            <div className="card-body d-none">
                <h5 className="product-card-title">{title ? title : "Sample Text"}</h5>
                <p className="product-card-text">{desc ? desc : "Description of product here"}</p>
                <p>{ "$" + price}</p>
                {/*<a href="#" onClick={() => addToCart({id, title, desc, image, price}) } className="btn btn-primary">Add to Cart</a>*/}
            </div>
        </div>
    );
}