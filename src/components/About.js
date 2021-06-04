import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import about_bg from "../assets/about_bg.jpg";

const Styles = styled.div``;
const About = (props) => {
    return (
        <Styles>
            <div id="about" className="pt-5">
                <Container>
                    <p
                        style={{
                            fontSize: "5rem",
                            color: "#585be6",
                            fontWeight: "bolder",
                            textShadow: "3px 3px #F18805",
                        }}
                    >
                        The Lance Story
                    </p>
                    <p style={{ fontSize: "1.3rem" }}>
                        LanceRecruiter is an online freelance recruitment
                        marketplace connecting employers and recruiters across
                        different industries all on one platform. Our community
                        is for those who are willing to take a step into the
                        future and follow the trend of Freelancing. We offer the
                        freedom and flexibility for our talent acquisition
                        community that can not be found with traditional 9-5
                        jobs
                    </p>
                    <Row>
                        <Col>
                            <img width="100%" src={about_bg}></img>
                        </Col>
                        <Col style={{ fontSize: "1.1rem" }} xs={4}>
                            <p>
                                <ul>
                                    <li className="mb-5">
                                        A Talent Acquisition solution that
                                        aggregates industry specialist
                                        recruiters to be versed in a setting
                                        where you can manage your own clients
                                        and requisitions all in one platform.
                                    </li>
                                    <li className="mb-5">
                                        LanceRecruiter is for companies looking
                                        to use specialized recruiters to grow
                                        their business while opting for a cost
                                        effective option to achieve their hiring
                                        goals.
                                    </li>
                                    <li>
                                        Unlock your earning potential through
                                        LanceRecruiter and simplify your
                                        recruitment process through the world of
                                        freelance recruitment.
                                    </li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Styles>
    );
};

export default About;
