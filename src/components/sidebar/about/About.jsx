import React from "react";
import "./About.css";

export default () => {
    return(
        <div className="About">
            <div className="aboutButtons">
                <button className="btnMore">Sobre</button> 
                <button className="btnMore">Ajuda</button> 
                <button className="btnMore">Imprensa</button> 
                <button className="btnMore">API</button> 
                <button className="btnMore">Carreiras</button> 
                <button className="btnMore">Privacidade</button> 
                <button className="btnMore">Termos</button> 
                <button className="btnMore">Localizações</button> 
                <button className="btnMore">Principais Contas</button> 
                <button className="btnMore">Hashtags</button> 
                <button className="btnMore">Idioma</button> 
            </div>

            <div className="copyright"> 
                &copy; 2022 INSTAGRAM FROM META
            </div>
        </div>
    );
}