import React, { useContext } from "react";
import "./index.css";
import GlobalContext from "../../utils/GlobalContext";


export default function CartItem(props){

    const { id, title, price, image, quantity } = props;
    const { removeFromCart } = useContext(GlobalContext);

    return (
        <div className="row" id={id}>
            <div className="col-1"></div>
            <div className="col-10 cart-style">
                <div className="cart-image" style={{ backgroundImage: `url(${image})` }}/>
                <div className="cart-title">{title}</div>
                <div className="cart-quantity">Quantity: {quantity}</div>
                <div className="cart-price">${price}</div>
                <div className="remove-button" onClick={() => { removeFromCart(id) }}><i class="fa fa-close" style={{fontSize: 32 + "px", color: "red"}}></i></div>
            </div>
            <div className="col-1"></div>
        </div>
    );
}