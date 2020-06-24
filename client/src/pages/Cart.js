import React from "react";
import CartItem from "../components/CartItem";
import GlobalContext from "../utils/GlobalContext";

export default function Cart(){

    const { cartItems } = React.useContext(GlobalContext);

    return (
        <div>
            <div className="row">
                <div className="col-10">
                    {
                        cartItems.length > 0 ? cartItems.map(e => {
                            return <CartItem key={e.id} id={e.id} title={e.title} price={e.price} image={e.image} quantity={e.quantity} />
                        }) : <h1>Cart Empty!</h1>
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <button className="btn btn-primary" type="button">Checkout</button>
                </div>
            </div>
        </div>
    );
}