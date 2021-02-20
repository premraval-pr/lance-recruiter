import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
    return (
        <Navbar expand="xl" bg="dark" variant="light" sticky="top">
            <Navbar.Brand>
                <img width="10%" height="10%" src={logo} alt="Logo" />
                <span
                    className="mx-3"
                    style={{ fontSize: "120%", color: "whitesmoke" }}
                >
                    LanceRecruiter
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#home"
                            activeStyle={{
                                color: "whitesmoke",
                            }}
                            style={{
                                fontSize: "150%",
                                color: "gray",
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
                                color: "whitesmoke",
                            }}
                            style={{
                                fontSize: "150%",
                                color: "gray",
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            How it works
                        </NavHashLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavHashLink
                            smooth
                            to="/#about"
                            activeStyle={{
                                color: "whitesmoke",
                            }}
                            style={{
                                fontSize: "150%",
                                color: "gray",
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
                                color: "whitesmoke",
                            }}
                            style={{
                                fontSize: "150%",
                                color: "gray",
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
                                color: "whitesmoke",
                            }}
                            style={{
                                fontSize: "150%",
                                color: "gray",
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
                            to="/login"
                            activeStyle={{
                                color: "whitesmoke",
                            }}
                            style={{
                                fontSize: "150%",
                                color: "gray",
                                textDecoration: "none",
                            }}
                            className="m-3"
                        >
                            Login/Signup
                        </NavHashLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
