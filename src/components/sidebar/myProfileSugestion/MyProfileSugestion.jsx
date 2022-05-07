import React from "react";
import "./MyProfileSugestion.css";

import ProfilePicture from "../../general/ProfilePicture";
import MyProfilePicture from "../../../images/shinji.jpg";

export default props => {
    return (
        <div className="MyProfleSugestion">
            <div>
                <ProfilePicture picture_src={MyProfilePicture} width="60px"/>
            </div>
            <div className="MyInfos">
                <span className="nickname">natan_rocha_</span>
                <span className="realName">Natan Barbosa</span>
            </div>
            <div className="button-box">
                <button type="button" className="changeAcc">Mudar</button>
            </div>
        </div>
    );
}