import React from "react";
import './Navbar.css';
import prof_pictire_src from '../../images/shinji.jpg';

function Navbar() {
    return (
        <div className="app__header">
            <div className="app__headerWrapper">
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram original logo" title="Instagram original logo"
                />

                <div className="app__headerSearch">
                    <input type="text" name="appSearch" id="appSearch" className="appSearch" placeholder="Pesquisar" />
                </div>

                <div className="app__headerButtons">
                    <button type="button"><i className="fa-solid fa-house"></i></button>
                    <button type="button"><i className="fa-regular fa-paper-plane"></i></button>
                    <button type="button"><i className="fa-solid fa-plus"></i></button>
                    <button type="button"><i className="fa-regular fa-compass"></i></button>
                    <button type="button"><i className="fa-regular fa-heart"></i></button>
                    <button type="button"><img src={prof_pictire_src} alt="foto de perfil" className="prof-picture" /></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;