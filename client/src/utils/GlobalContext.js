import { createContext } from "react";

const GlobalContext = createContext({
    numInCart: 0,
    addToCart: function() {console.log("Empty function")}
});


export default GlobalContext;