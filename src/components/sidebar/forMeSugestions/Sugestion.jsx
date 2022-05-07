import React from "react"
import ProfilePicture from "../../general/ProfilePicture";
import "./sugestion.css";

export default props => {
    return (
        <div className="Sugestion">
            <div style={{flex: "10%"}}>
                <ProfilePicture picture_src={props.prof_picture} width="45px" />
            </div>
            <div className="TheirInfos">
                <span className="nickname">{props.nickname}</span>
                <div className="followedBy">{props.followedBy}</div>
            </div>
            <div style={{flex: "10%"}} className="button-box">
                <button type="button" className="follow">Seguir</button>
            </div>
        </div>
    );
}