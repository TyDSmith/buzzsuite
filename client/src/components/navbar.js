import React, { Component } from "react";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from "../App";

class NavBar extends Component {
    
    render() {
<<<<<<< HEAD
    let UserLoggedIn = this.props.UserLoggedIn;
    let loginButton;
    if (UserLoggedIn) {
      loginButton = <Link onClick={this.props.signout}> signout </Link>
    } else {
      loginButton = <Link to="/login"> Login </Link>
    }
      return (
        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/home">
              <img src="../images/logos/BuzzSuite.png" alt="logo" height="25" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/campaigns"> Campaigns </Link>
              <Link to="/Influencers"> Influencers </Link>
              <Link to="/dashboard"> Dashboard </Link>
            </Nav>
            <Form inline>
              {loginButton}
            </Form>
          </Navbar>
        </div>
=======
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">
                        <img src="../images/logos/BuzzSuite.png" height="25" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/campaigns"> Campaigns </Link>
                        <Link to="/Influencers"> Influencers </Link>
                        <Link to="/dashboard"> Dashboard </Link>
                        {/* <Nav.Link to="/campaigns">Campaigns</Nav.Link>
              <Nav.Link to="/Influencers">Influencers</Nav.Link>
              <Nav.Link to="/dashboard">Dashboard</Nav.Link> */}
                    </Nav>
                    <Form inline>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Form>
                </Navbar>
            </div>
>>>>>>> f3624d412e84f406aff94640491d9e6a8468b569
        );
    }
}

export default NavBar;

