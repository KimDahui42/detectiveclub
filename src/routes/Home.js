import React from "react";
import { Link, Route } from "react-router-dom";
import Password from "../components/Password";

function Home() {
    return (
        <section className="container">
            <div className="home__door">
                <span className="home_doorText">
                    <Link to='/passwd'>환영합니다</Link>
                    <Route path="/passwd" component={Password} />
                </span>
            </div>
        </section>
    );
}
export default Home;