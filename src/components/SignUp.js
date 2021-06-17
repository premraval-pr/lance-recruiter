import { Container, Form, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div``;

const SignUp = () => {
    return (
        <Container id="signup">
            <Styles>
                <div className="text-center my-5 py-5">
                    <p className="h2">SignUp to get Early Access </p>
                    <Form className="my-5">
                        <Row>
                            <Col>
                                <Form.Control
                                    className="my-2"
                                    placeholder="Enter First Name"
                                    required
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="my-2"
                                    placeholder="Enter Last Name"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="my-2"
                                    placeholder="Enter Email"
                                    type="email"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    style={{
                                        backgroundColor: "#585be6",
                                        border: "0px",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                    type="submit"
                                    className="my-2 reg-button"
                                    block
                                >
                                    Register
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Styles>
        </Container>
    );
};

export default SignUp;
