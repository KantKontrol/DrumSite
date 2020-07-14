import React from "react";
import "./index.css";

export default function AboutJumbo(props){
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.lead}</p>
            <hr className="my-4" style={{ backgroundColor: "#ABEBD2"}} />
            <p style={{ fontSize: 1.25 + "rem"}}>{props.about}</p>
            <p className="lead">
                <a className="btn btn-lg jumbo-button-style" href={props.href} role="button">{props.atext}</a>
                <a className="btn btn-lg jumbo-button-style" href="/contact" role="button" style={{ marginLeft: 5 + "px"}}>Contact</a>
            </p>
        </div>
    );
}