import React from 'react';
import { Link } from "react-router-dom";

function Header(props){
    return(
        <div>
            <div>Header Logo</div>
            <img src="../../../public/images/BuzzSuite.png"></img>
            <Link to="/">Home</Link> | 
            <Link to="/blog">Blog</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/contact">Contact</Link> | 
            <Link to="/learn">Learn</Link> |
        </div>
    )
}

export default Header;