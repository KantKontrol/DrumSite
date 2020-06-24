import React from "react";
import "./index.css";


export default function CartItem(props){

    const { id, title, price, image, quantity } = props;

    return (
        <div className="row" id={id}>
            <div className="col-1"></div>
            <div className="col-10 cart-style">
                <div className="cart-image" style={{ backgroundImage: `url(${image})` }}/>
                <div className="cart-title">{title}</div>
                <div className="cart-quantity">Quantity: {quantity}</div>
                <div className="cart-price">${price}</div>
            </div>
            <div className="col-1"></div>
        </div>
    );
}