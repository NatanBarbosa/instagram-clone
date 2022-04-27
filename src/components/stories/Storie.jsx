import React from "react";
import "./Stories.css";

function Storie(props){
    return(
        <div className="Storie">
            <div className="new-storie">
                <img src={props.picture_src} alt="foto de perfil" className="prof-picture"/>
            </div>
            <div>
                <span className="prof-username">{props.username}</span>
            </div>
        </div>
    );
}

export default Storie