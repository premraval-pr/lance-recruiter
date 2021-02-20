import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background: #f1c40f;
        height: 100vh;
        left: 0;
        width: 100%;
        overflow: hidden;
    }
    .text-white {
        color: white;
    }
`;
const HowItWorks = (props) => {
    return (
        <Styles>
            <div className="main-bg text-center pt-5" id="how-it-works">
                <p className="display-1 m-5">How It Works</p>
                <p className="display-1 m-5 text-white">How It Works</p>
                <p className="display-1 m-5">How It Works</p>
                <p className="display-1 m-5 text-white">How It Works</p>
            </div>
        </Styles>
    );
};

export default HowItWorks;
