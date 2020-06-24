import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import GlobalContext from "../utils/GlobalContext";




export default function Master(){

    const [globalState, setGlobalState] = React.useState({
        cartItems: [],
        numInCart: 0,
        addToCart: function(product){
            let found = false;
        
            for(let i =0; i < globalState.cartItems.length;i++){
                if(globalState.cartItems[i].id === product.id){

                    found = true;
                    globalState.cartItems[i].quantity++;
                    break;
                }
            }

            if(!found){
                product.quantity = 1;
                globalState.cartItems.push(product);
            } 
        }
    });

    
    return (
        <GlobalContext.Provider value={globalState}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path={["/", "/home"]}>
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="*">
                        <h1>NO FIND!</h1>
                    </Route>
                </Switch>               
            </Router>
        </GlobalContext.Provider>
    );
}