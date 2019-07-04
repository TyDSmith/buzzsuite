import React, { Component } from "react";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from "../App";
import greeting from "../App";


class NavBar extends Component {

    render() {
        let UserLoggedIn = this.props.UserLoggedIn;
        let loginButton;
        if (UserLoggedIn) {
            loginButton = <Link onClick={this.props.signout} className="navlinks"> Signout </Link>
        } else {
            loginButton = <Link to="/login"> Login </Link>
        }
        return (
            <div>
                <Navbar bg="#19334d" variant="dark">
                    <Navbar.Brand href="/home">
                        <img src="../images/logos/BuzzSuite.png" alt="logo" height="25" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/campaigns" className="navlinks"> Campaigns </Link>
                        <Link to="/Influencers" className="navlinks"> Influencers </Link>
                        <Link to="/dashboard" className="navlinks" > Dashboard </Link>
                        <Link to="/Influencer" className="navlinks"> Influencer-single </Link>


                    </Nav>
                    <Form inline>

                        {loginButton}
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;

