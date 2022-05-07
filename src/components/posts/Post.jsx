import React, {useState} from "react";
import ProfilePicture from "../general/ProfilePicture";
import If from "../general/If";
import "./Post.css";

import LikedBy from "../../images/rapaz-1.jpg";

export default props => {
    const[comment, setComment] = useState('');

    return (
        <div className="Post">
            <div className="header">
                <div>
                    <ProfilePicture picture_src={props.prof_picture} width="40px" />
                </div>
                <div>
                    <strong className="profile">{props.username}</strong>
                </div>
                <div className="moreOptions">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className="media">
                <If test={props.type === "image"}>
                    <img src={props.mediaUrl} className="postMedia"/>
                </If>

                <If test={props.type === "video"}>
                    <video src={props.mediaUrl} className="postMedia" controls></video>
                </If>
            </div>

            <div className="interactions">
                <button className="btnFormat"><i className="fa-regular fa-heart"></i></button>
                <button className="btnFormat"><i className="fa-regular fa-comment"></i></button>
                <button className="btnFormat"><i className="fa-regular fa-paper-plane"></i></button>
                <button className="btnFormat" style={{marginLeft:'auto'}}><i className="fa-regular fa-bookmark"></i></button>
            </div>

            <div className="likedBy">
                <ProfilePicture picture_src={LikedBy} width="25px" /> 
                <div className="people">Curtido por <strong className="profile">guga_barros</strong> e outras pessoas </div>
            </div>

            <div className="captions">
                <strong className="profile">{props.username}</strong>
                <span>{props.caption}</span>
            </div>

            <div className="showComments">
                <span className="moreComments">Mostrar todos os 10 comentários</span>
                <div className="someComments">
                    <div><strong className="profile">Diego</strong> <span>Que bonito!</span></div>
                    <div><strong className="profile">Massachussets</strong> <span>Muito legal!</span></div>
                </div>
            </div>

            <div className="postDate">
                <span>Há {props.dias} dias</span>
            </div>

            <div className="commentSection">
                <div>
                    <button className="btnFormat"><i className="fa-regular fa-face-smile"></i></button>
                </div>
                <div className="commentDiv">
                    <input type="text" className="commentInput" value={comment} onChange={e => {
                        setComment(e.target.value);
                    }} />
                </div>
                <div className="pub-box">
                    <button className="btnPub">Publicar</button>
                </div>
            </div>  
        </div>
    );
}