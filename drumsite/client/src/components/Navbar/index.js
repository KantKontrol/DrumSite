import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "../../pages/Home";


export default function Navbar(){


    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Logo Here</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path={"/", "/home"}>
                    <Home />
                </Route>
                <Route path="*">
                    <h1>NO FIND!</h1>
                </Route>


            </Switch>
        </Router>
    );
}