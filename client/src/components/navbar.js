import React, { Component } from "react";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
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


        // <nav className="navbar navbar-default">
        //     <div className="container">
        //         <div className="navbar-header">
        //             <a class="navbar-brand" href="/">
        //                 <img alt="Brand" src="../images/logos/BuzzSuite.png" height="30" />
        //             </a>

        //             <ul className="nav navbar-nav">
        //                 {/* <div>Header Logo</div> */}
        //                 <li>
        //                     <Link to={"/"}>Home </Link>
        //                 </li>
        //                 <li>
        //                     <Link to={"/dashboard"}>Dashboard </Link>
        //                 </li>
        //                 <li>
        //                     <Link to={"/influencers"}>Influencers </Link>
        //                 </li>
        //                 <li>
        //                     <Link to={"/campaigns"}>Campaigns </Link>
        //                 </li>
        //                 <li class="nav-login">
        //                     <Link to={"/login"}>Login </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>