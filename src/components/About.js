import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background: #4fc3f7;
        height: 100vh;
        left: 0;
        width: 100%;
        overflow: hidden;
    }
    .text-white {
        color: white;
    }
`;
const About = (props) => {
    return (
        <Styles>
            <div className="main-bg text-center">
                <p className="display-1 m-5">About</p>
                <p className="display-1 m-5 text-white">About</p>
                <p className="display-1 m-5">About</p>
                <p className="display-1 m-5 text-white">About</p>
            </div>
        </Styles>
    );
};

export default About;
