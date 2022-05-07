import React, { useState } from "react";
import "./Stories.css";

export default props => {
    return (
        <div className="new-stories">
            <h3 className="new-pubs">Novas publicações</h3>
            <div className="stories-box">
                {props.children}
            </div>
        </div>
    );
}