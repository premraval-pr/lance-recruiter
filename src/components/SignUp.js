import { Container, Form, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import GooglePlacesAutoComplete from "react-google-places-autocomplete";
import { useState } from "react";

const Styles = styled.div``;

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        industries: "",
        type: "company",
    });
    const [location, setLocation] = useState(null);
    const { firstName, lastName, companyName, email, industries, type } =
        formData;

    const registerClicked = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container id="signup">
            <Styles>
                <div className="my-5 py-3">
                    <p className="h2 text-center">
                        SignUp to get Early Access{" "}
                    </p>
                    <Form className="my-5">
                        <Row>
                            <Col>
                                <Form.Check
                                    name="userType"
                                    type="radio"
                                    label="Company"
                                    inline
                                    value="company"
                                    onChange={() =>
                                        setFormData({
                                            ...formData,
                                            type: "company",
                                        })
                                    }
                                    defaultChecked
                                />
                                <Form.Check
                                    name="userType"
                                    type="radio"
                                    label="Recruiter"
                                    inline
                                    value="recruiter"
                                    onChange={() =>
                                        setFormData({
                                            ...formData,
                                            type: "recruiter",
                                        })
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="my-2"
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    value={firstName}
                                    required
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className="my-2"
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    value={lastName}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="my-2"
                                    placeholder="Enter Company Name"
                                    type="email"
                                    name="companyName"
                                    value={
                                        type === "company" ? companyName : "N/A"
                                    }
                                    disabled={type !== "company"}
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
                                    name="email"
                                    value={email}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <GooglePlacesAutoComplete
                                    selectProps={{
                                        location,
                                        onChange: setLocation,
                                        placeholder: "Enter Location",
                                        className: "my-2",
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col className="text-muted ml-3 my-2">
                                        Industry (Select all that apply)
                                    </Col>
                                </Row>
                                <Row className="my-2">
                                    <Col className="ml-2">
                                        <Form.Check label="Technical" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Pharmaceutical" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="IT - Helpdesk" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Retail" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Finance" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Hospitality" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="ml-2">
                                        <Form.Check label="Sales" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Marketing" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Engineering" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Healthcare" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Legal" />
                                    </Col>
                                    <Col className="ml-2">
                                        <Form.Check label="Other" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="my-2">
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
                                    onClick={registerClicked}
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
