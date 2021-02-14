import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background: #fc3755;
        height: 100vh;
        width: 100%;
        left: 0;
        overflow: hidden;
    }
    .text-white {
        color: white;
    }
`;
const Home = (props) => {
    return (
        <Styles>
            <div className="main-bg text-center">
                <p className="display-1 m-5">Home</p>
                <p className="display-1 m-5 text-white">Home</p>
                <p className="display-1 m-5">Home</p>
                <p className="display-1 m-5 text-white">Home</p>
            </div>
        </Styles>
    );
};

export default Home;
