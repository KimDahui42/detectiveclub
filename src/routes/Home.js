import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <section className="container">
            <div className="home_door">
                <span className="home_doorText">
                    <Link to='/detectiveclub/passwd'>환영합니다</Link>
                </span>
            </div>
        </section>


    );
}
export default Home;