import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import GlobalContext from "../utils/GlobalContext";




export default function Master(){

    const [globalState, setGlobalState] = React.useState({
        numInCart: 0,
        addToCart: function(){
            console.log("test")
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