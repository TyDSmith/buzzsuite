import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <div>Header Logo</div>
            <Link to="/">Home </Link>
            <Link to="/dashboard">Dashboard </Link>
            <Link to="/influencers">Influencers </Link>
        </div>
    )
}

export default Navbar;