import React from "react";
import roomView from "../images/동아리실.png";
import { Link } from "react-router-dom";

function Clubroom() {
    return (
        <section className="container">
            <Link to="/detectiveclub/clubmembers" >
                <div className="clubrooom__container">
                    <img src={roomView} alt="동방" />
                </div>
            </Link>
        </section>
    );
}
export default Clubroom;