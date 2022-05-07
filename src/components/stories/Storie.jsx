import React from "react";
import ProfilePicture from "../general/ProfilePicture";
import "./Stories.css";

function Storie(props){
    return(
        <div className="Storie">
            <div className="new-storie">
                <ProfilePicture picture_src={props.picture_src} width="60px"/>
            </div>
            <div>
                <span className="prof-username">{props.username}</span>
            </div>
        </div>
    );
}

export default Storie