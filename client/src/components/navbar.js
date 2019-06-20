import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <a class="navbar-brand" href="/">
                        <img alt="Brand" src="../images/logos/BuzzSuite.png" height="30" />
                    </a>

                    <ul className="nav navbar-nav">
                        {/* <div>Header Logo</div> */}
                        <li>
                            <Link to={"/"}>Home </Link>
                        </li>
                        <li>
                            <Link to={"/dashboard"}>Dashboard </Link>
                        </li>
                        <li>
                            <Link to={"/influencers"}>Influencers </Link>
                        </li>
                        <li>
                            <Link to={"/campaigns"}>Campaigns </Link>
                        </li>
                        <li>
                            <Link to={"/login"}>login </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;