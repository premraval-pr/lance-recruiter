import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import bg from "../assets/home_bg.jpg";

const Styles = styled.div`
    .main-bg {
        background: #fafafa;
    }
    .text-white {
        color: white;
    }
    .breathe {
        animation: MoveUpDown 3s linear infinite;
        animation-timing-function: ease-in-out;
        position: absolute;
    }

    @keyframes MoveUpDown {
        0%,
        100% {
            top: 0;
        }
        50% {
            top: 10px;
        }
    }
`;
const Home = (props) => {
    return (
        <Styles>
            <div className="main-bg">
                <Container style={{ height: "100vh" }}>
                    <div className="pt-5" id="home">
                        <Row>
                            <Col xs={5}>
                                <Row>
                                    <p
                                        className="breathe"
                                        style={{
                                            fontSize: "5rem",
                                            color: "#585be6",
                                            fontWeight: "bolder",
                                            textShadow: "3px 3px #F18805",
                                        }}
                                    >
                                        LanceRecruiter Freelance Recruitment
                                        Marketplace
                                    </p>
                                </Row>
                                <Row>
                                    <p
                                        style={{
                                            fontSize: "1.5rem",
                                            marginTop: "32rem",
                                        }}
                                    >
                                        Connecting recruiters and employers
                                        online globally. Hire expert freelance
                                        recruiters for any job, online!
                                    </p>
                                </Row>
                            </Col>
                            <Col>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <img
                                    src={bg}
                                    alt="Background"
                                    style={{
                                        height: "35rem",
                                        objectFit: "cover",
                                    }}
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Styles>
    );
};

export default Home;
