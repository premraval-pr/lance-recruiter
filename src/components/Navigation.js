import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = (props) => {
    return (
        <Navbar expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                <img width="7%" height="7%" src={logo} />
                <span className="mx-3">Lance Recruiter</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">How It Works</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">FAQs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Login/SignUp</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
