import React, {useState} from "react";
import "./ForMeSugestions.css";
import Sugestion from "./Sugestion";

import Picture1 from "../../../images/rapaz-1.jpg";
import Picture2 from "../../../images/rapaz-2.jpg";
import Picture3 from "../../../images/rapaz-3.jpg";
import Picture4 from "../../../images/moca-4.jpg";
import Picture5 from "../../../images/amogus-5.png";

export default _ => {
    const[profiles, setProfiles] = useState([
        {
            prof_picture: Picture1,
            nickname: "cleber_ferreira_",
            followedBy: "Seguido por Jonathan_ferro e mais 3 pessoas"
        },
        {
            prof_picture: Picture2,
            nickname: "SS_king",
            followedBy: "Seguido por memes br"
        },
        {
            prof_picture: Picture3,
            nickname: "Michael_Maicou",
            followedBy: "Seguido por Leide_Claudia e mais 1 pessoa"
        },
        {
            prof_picture: Picture4,
            nickname: "CF_Insta",
            followedBy: "Seguido por Dante_ferreiro e mais 1 pessoa"
        },
        {
            prof_picture: Picture5,
            nickname: "rick_rick",
            followedBy: "Seguido por Diego_santos e mais 10 pessoas"
        },
    ])

    return (
        <div className="ForMeSugestions">
            <div className="title-box">
                <h3>Sugestões para você</h3>

                <button className="seeAllSugestions">Ver tudo</button>
            </div>

            <div className="sugestions-box">
                {profiles.map((profile, key) => {
                    return(
                        <Sugestion 
                        key={key}
                        prof_picture={profile.prof_picture} 
                        nickname={profile.nickname} 
                        followedBy={profile.followedBy} />
                    );
                })}
                
            </div>
            
        </div>
    );
}