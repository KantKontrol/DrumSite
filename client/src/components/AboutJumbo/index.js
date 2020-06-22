import React from "react";


export default function AboutJumbo(props){

    

    return (
        <div className="jumbotron">
            <h1 className="display-4">About Us!</h1>
            <p className="lead">{props.lead}</p>
            <hr className="my-4" />
            <p>{props.about}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href={props.href} role="button">Learn more</a>
            </p>
        </div>
    );
}