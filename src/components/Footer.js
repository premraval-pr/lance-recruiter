import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .icon {
        color: black;
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
                                Careers<br></br>
                                About<br></br>
                                Blog<br></br>
                                Partners<br></br>
                            </div>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">Legal</span>
                            <div className="mt-3">
                                Terms and Conditions<br></br>
                                Privacy policy<br></br>
                            </div>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">Latest Updates</span>
                            <div className="mt-3">
                                Platform<br></br>
                                Android<br></br>
                                iOS<br></br>
                                Beta Features<br></br>
                            </div>
                        </Col>
                        <Col xs={5} className="text-center mt-5">
                            <Row>
                                <Col>
                                    <i className="fa fa-4x fa-facebook icon"></i>
                                </Col>
                                <Col>
                                    <i className="fa fa-4x fa-linkedin icon"></i>
                                </Col>
                                <Col>
                                    <i className="fa fa-4x fa-instagram icon"></i>
                                </Col>
                                <Col>
                                    <i className="fa fa-4x fa-twitter icon"></i>
                                </Col>
                                <Col>
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
