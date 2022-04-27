import React from "react";
import Storie from "./Storie";
import userImage from "../../images/shinji.jpg";
import "./Stories.css";

function Stories() {
    return (
        <div className="new-stories">
            <h3 className="new-pubs">Novas publicações</h3>
            <div className="stories-box">
                <Storie
                    picture_src={userImage}
                    username="natan_rocha_"
                />

                <Storie
                    picture_src={userImage}
                    username="natan_rocha_"
                />

                <Storie
                    picture_src={userImage}
                    username="natan_rocha_"
                />

                <Storie
                    picture_src={userImage}
                    username="natan_rocha_"
                />
            </div>
        </div>
    );
}

export default Stories