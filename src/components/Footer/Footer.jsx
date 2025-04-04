import React from "react";
import rocketImage from '../../assets/images/rocket.png';


export const Footer = () => {
    return (

        <footer className="footer">
            
            <div className="container">
                <div className="footer__image">
                    <img src={rocketImage} alt="Rocket" title="Exciting space adventure!"/>
                </div>
                <div className="footer__description">Exciting space adventure!</div>
            </div>

        </footer>

    )
}