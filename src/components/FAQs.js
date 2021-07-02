import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Styles = styled.div``;
const FAQs = (props) => {
    const faqList = [
        {
            id: 1,
            question: "How much does it cost to post a job?",
            answer: "There is no cost to post a job on the LanceRecruiter platform. Once you are registered on the LR platform it is free to post a job to the platform.",
        },
        {
            id: 2,
            question: "How do recruiters get paid?",
            answer: "Recruiters are paid through our escrow system. The money will be held in escrow until the candidate's first day of work. Once the candidate has started work the recruiter will be paid in full for the project. ",
        },
        {
            id: 3,
            question: "How do I know I am working with a qualified recruiter?",
            answer: "Recruiters are rated within the platform (Copper, Bronze, Silver, Gold, Platinum) as recruiters successfully place candidates for employers whose status within LR will upgrade. You can also view reviews left on recruiter profiles from previous projects.",
        },
        {
            id: 4,
            question: "How do I select a Recruiter?",
            answer: "You are provided the autonomy to pick and choose which Recruiters you want to work with that apply to your posted job.",
        },
        {
            id: 5,
            question: "What is the right price to pay for a posted job?",
            answer: "We leave this decision up to the employer, our marketplace allows employers to list the fee they feel is feasible for the job being posted.",
        },
        {
            id: 6,
            question: "Can I stop working with a Recruiter?",
            answer: "You can let the Recruiter know in the active chat that you would like for them to stop working on your role. Please note that if a Recruiter has submitted any candidates and they do get hired they will still be paid.",
        },
        {
            id: 7,
            question:
                "How much does it cost to join LanceRecruiter or apply to Jobs?",
            answer: "It is completely free! Once you register and sign in you will be able to apply to jobs on the marketplace at no cost.",
        },
        {
            id: 8,
            question: "How do I find Jobs to work on?",
            answer: "You can search for jobs that have been posted by Employers on LanceRecruiters marketplace. You will be able to search based on your industry, company, or geographical location.",
        },
        {
            id: 9,
            question: "How do you guarantee Employers will pay Recruiters?",
            answer: "Employers are invoiced at the beginning of a project and the money will be held in Escrow for the duration of the project. Once the project is complete and the candidate has been hired the recruiter will be paid on the candidates first day of employment",
        },
    ];

    return (
        <Styles>
            <div id="faq" className="pt-5">
                <Container>
                    <p
                        style={{
                            fontSize: "5rem",
                            color: "#585be6",
                            fontWeight: "bolder",
                            textShadow: "3px 3px #F18805",
                        }}
                    >
                        Common Questions
                    </p>
                    <Accordion defaultActiveKey={1} className="py-5">
                        {faqList.map((singleFaq) => (
                            <Card key={singleFaq.id}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey={singleFaq.id}
                                >
                                    {singleFaq.question}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={singleFaq.id}>
                                    <Card.Body>{singleFaq.answer}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </Container>
            </div>
        </Styles>
    );
};

export default FAQs;
