import React from "react";
import "./index.css";

export default function Footer(props){



    return (
        <div className="footer-style">

            <div className="main-footer-content">
                <div className="footer-text">Contact: { props.email ? props.email : "John@doe.com"}</div>
            </div>

            <div id="bottom-side-text">
                SkollTech
            </div>
        </div>
    );
}