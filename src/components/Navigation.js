import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import nav_logo from "../assets/nav_logo.png";
import { NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
    const activeColor = "#585be6";
    const color = "#F18805";

    return (
        <Navbar
            expand="md"
            variant="dark"
            sticky="top"
            style={{ backgroundColor: "#FAFAFA" }}
        >
            <Navbar.Brand>
                <NavHashLink smooth to="/#home">
                    <img width="5%" height="5%" src={logo} alt="Logo" />
                    <img
                        width="20%"
                        height="10%"
                        src={nav_logo}
                        alt="Nav Logo"
                    />
                </NavHashLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#home"
                            activeStyle={{
                                color: activeColor,
                            }}
                            style={{
                                color: color,
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            Home
                        </NavHashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#how-it-works"
                            activeStyle={{
                                color: activeColor,
                            }}
                            style={{
                                color: color,
                                textDecoration: "none",
                            }}
                            className="m-3 text-nowrap"
                        >
                            How It Works
                        </NavHashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#about"
                            activeStyle={{
                                color: activeColor,
                            }}
                            style={{
                                color: color,
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            About
                        </NavHashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#faq"
                            activeStyle={{
                                color: activeColor,
                            }}
                            style={{
                                color: color,
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            FAQs
                        </NavHashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#contact"
                            activeStyle={{
                                color: activeColor,
                            }}
                            style={{
                                color: color,
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            Contact
                        </NavHashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#signup"
                            activeStyle={{
                                color: activeColor,
                            }}
                            style={{
                                color: color,
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            Signup
                        </NavHashLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
