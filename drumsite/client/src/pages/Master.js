import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Navbar from "../components/Navbar";




export default function Master(){


    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path={["/", "/home"]}>
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="*">
                        <h1>NO FIND!</h1>
                    </Route>
                </Switch>               
            </Router>
        </div>
    );
}