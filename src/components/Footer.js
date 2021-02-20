import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .icon {
        color: black;
    }
    .flip:hover {
        animation: spin 0.5s linear infinite;
    }
    @keyframes spin {
        100% {
            transform: rotateY(-360deg);
        }
    }
    .link {
        background: linear-gradient(to right, #ff9800 49%, transparent 0);
        background-position: right;
        background-size: 200%;
        padding: 0px 10px;
        transition: background-position 0.2s;
        :hover {
            background-position: left;
            font-weight: 500;
        }
    }
    .bar {
        padding: 0px 2.5px;
        background: #ff9800;
    }
`;

const Footer = (props) => {
    return (
        <Styles>
            <footer>
                <Container>
                    <Row>
                        <Col className="my-3">
                            <span className="h5">Company</span>
                            <div className="mt-3">
                                <span className="bar" />
                                <span className="link">Careers</span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">About</span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">Blog</span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">Partners</span>
                                <br></br>
                            </div>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">Legal</span>
                            <div className="mt-3">
                                <span className="bar" />
                                <span className="link">
                                    Terms and Conditions
                                </span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">Privacy Policy</span>
                                <br></br>
                            </div>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">Latest Updates</span>
                            <div className="mt-3">
                                <span className="bar" />
                                <span className="link">Platform</span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">Android</span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">iOS</span>
                                <br></br>
                                <span className="bar" />
                                <span className="link">Beta Features</span>
                                <br></br>
                            </div>
                        </Col>
                        <Col xs={5} className="text-center mt-5">
                            <Row>
                                <Col className="flip">
                                    <i className="fa fa-4x fa-facebook icon"></i>
                                </Col>
                                <Col className="flip">
                                    <i className="fa fa-4x fa-linkedin icon"></i>
                                </Col>
                                <Col className="flip">
                                    <i className="fa fa-4x fa-instagram icon"></i>
                                </Col>
                                <Col className="flip">
                                    <i className="fa fa-4x fa-twitter icon"></i>
                                </Col>
                                <Col className="flip">
                                    <i className="fa fa-4x fa-youtube icon"></i>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Styles>
    );
};

export default Footer;
