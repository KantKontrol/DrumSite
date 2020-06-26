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
                <div className="row">
                    <div className="col-2">
                        <div className="cart-image" style={{ backgroundImage: `url(${image})` }}/>
                    </div>
                    <div className="col-6">
                        <div className="cart-title">{title}</div>

                        <div className="cart-price">${price}</div>

                    </div>
                    <div className="col-4">
                    <div style={{ fontSize: "medium", textAlign: "left"}}>Quantity</div>
                    <div className="input-group" >
                        
                            <div className="input-group-prepend">
                                <button className="btn btn-secondary" type="button" id="button-addon1"><i className="fas fa-arrow-down"></i></button>
                            </div>
                            <div className="cart-quantity">{quantity}</div>
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button" id="button-addon2"><i className="fas fa-arrow-up"></i></button>
                            </div>
                    </div>
                        
                        <div className="remove-button" onClick={() => { removeFromCart(id) }}><i className="fa fa-close" style={{fontSize: 32 + "px", color: "red"}}></i></div>
                    </div>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    );
}