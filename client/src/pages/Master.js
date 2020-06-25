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

            let items = globalState.cartItems;
            
            for(let i = 0; i < items.length;i++){ //iterates and checks if item exists in cart
                if(items[i].id === product.id){
                    found = true;
                    let updateItem = items[i];
                    updateItem.quantity+=1;
                    break;
                }
            }

            if(!found){//if it is not in the cart it assigns it a quantity and adds it to the cart
                product.quantity = 1;
                items.push(product);
            }  
    
            setGlobalState((prevGlobalState) => {
                return { ...globalState, cartItems: items, numInCart: prevGlobalState.numInCart + 1 }
            });
        },
        removeFromCart: function(id){
            let items = globalState.cartItems;

            for(let i = 0; i < items.length;i++){ //iterates and checks if item exists in cart
                if(items[i].id === id){
                    items.splice(i,1); //removes from the array starting at index we found the item at
                    setGlobalState({ ...globalState, cartItems: items});
                    break;
                }
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