import React from "react";
import roomView from "../images/동아리실.png";
import "../styles/Clubroom.css";

function Clubroom() {
    return (
        <section className="container">
            <div className="clubrooom__container">
                <img src={roomView} alt="동방"/>
            </div>
        </section>
    );
}
export default Clubroom;