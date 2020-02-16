import React from "react";
import styled from "styled-components";
import "./App.css";
import Router from "./components/Router";

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

function App(): JSX.Element {
    return (
        <ScreenContainer>
            <Router />
        </ScreenContainer>
    );
}

export default App;
