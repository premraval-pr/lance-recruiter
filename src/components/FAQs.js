import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background: #8e44ad;
        height: 100vh;
        left: 0;
        width: 100%;
        overflow: hidden;
    }
    .text-white {
        color: white;
    }
`;
const FAQs = (props) => {
    return (
        <Styles>
            <div className="main-bg text-center pt-5" id="faq">
                <p className="display-1 m-5">FAQs</p>
                <p className="display-1 m-5 text-white">FAQs</p>
                <p className="display-1 m-5">FAQs</p>
                <p className="display-1 m-5 text-white">FAQs</p>
            </div>
        </Styles>
    );
};

export default FAQs;
