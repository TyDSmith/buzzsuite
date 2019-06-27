import React, { Component } from "react";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from "../App";

class NavBar extends Component {
    render() {
      return (
        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/home">
              <img src="../images/logos/BuzzSuite.png" height="25" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/campaigns">Campaigns</Nav.Link>
              <Nav.Link href="/Influencers">Influencers</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Form inline>
              <Nav.Link href="/login">Login</Nav.Link>
            </Form>
          </Navbar>
        </div>
        );
    }
}

export default NavBar;