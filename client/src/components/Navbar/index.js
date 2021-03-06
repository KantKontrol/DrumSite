import React from "react";
import {Link, useLocation } from "react-router-dom";
//import GlobalContext from "../../utils/GlobalContext";
import "./index.css";


export default function Navbar(props){

    //let c = React.useContext(GlobalContext);
    let location = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-light  navbar-cus-color">
            <a className="navbar-brand text-color" href="/">DeDrumRoom</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className={ location == "/home" ? "nav-link text-color nav-active" : "nav-link text-color"} to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={ location == "/drums" ? "nav-link text-color nav-active" : "nav-link text-color"} to="/drums">Drums</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={ location == "/contact" ? "nav-link text-color nav-active" : "nav-link text-color"} to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        {/*<Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i><span className="badge badge-primary badge-pill">{c.numInCart}</span></Link>*/}
                    </li>
                </ul>
            </div>
        </nav>
    );
}