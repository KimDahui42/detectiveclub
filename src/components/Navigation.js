import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";


function Navigation() {
    return (
        <div className="nav">
            <Link to="/detectiveclub" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </div>
    );
}

export default Navigation;