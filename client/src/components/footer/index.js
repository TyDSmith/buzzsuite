import React, { Component } from "react";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./footer.css";

class Footer extends Component {

    render() {

        return (

            <div className="footer-div">

                <div className="footer-left-column">
                    <img
                        className="footer-image"
                        src="../images/logos/BuzzSuite-footer.png"
                        height="20"
                    />
                </div>
                <div className="footer-center-column">

                </div>
                <div className="footer-right-column">
                    A Mountain Lion Company
                </div>
            </div>


        )
    }
}


export default Footer;