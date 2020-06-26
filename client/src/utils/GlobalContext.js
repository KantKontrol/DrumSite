import { createContext } from "react";

const GlobalContext = createContext({
    cartItems: [],
    numInCart: 0,
    addToCart: function() {console.log("Empty function")},
    removeFromCart: function() {console.log("Empty function")},
    addQuantity: function() {console.log("Empty function")},
    removeQuantity: function() {console.log("Empty function")}
});


export default GlobalContext;