import React from "react";
import "./index.css";

export default function Footer(props){



    return (
        <div className="footer-style">

            <div className="main-footer-content">
                <div className="footer-text">Contact: { props.email ? props.email : "John@doe.com"}</div>
            </div>

            <div id="bottom-side-text">
                <a href="https://www.skolltech.dev" target="_blank" rel="noopener noreferrer"><img src="/images/skolllogo.png" height="24px" width="24px" alt="SkollTech Logo"></img></a>
            </div>
        </div>
    );
}