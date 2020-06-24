import React from "react";
import {Link} from "react-router-dom";
import GlobalContext from "../../utils/GlobalContext";


export default function Navbar(props){

    let c = React.useContext(GlobalContext);
 


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Logo Here</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i><span className="badge badge-primary badge-pill">{c.numInCart}</span></Link>
                    </li>
                </ul>
            </div>
            {console.log("render")}
        </nav>
    );
}