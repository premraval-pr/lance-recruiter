import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background: #48c9b0;
        height: 100vh;
        left: 0;
        width: 100%;
        overflow: hidden;
    }
    .text-white {
        color: white;
    }
`;
const Contact = (props) => {
    return (
        <Styles>
            <div className="main-bg text-center pt-5" id="contact">
                <p className="display-1 m-5">Contact</p>
                <p className="display-1 m-5 text-white">Contact</p>
                <p className="display-1 m-5">Contact</p>
                <p className="display-1 m-5 text-white">Contact</p>
            </div>
        </Styles>
    );
};

export default Contact;
