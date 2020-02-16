import React from "react";
import styled from "styled-components";
import "./App.css";
import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const PageContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
`;

function App(): JSX.Element {
    return (
        <ScreenContainer>
            <Header />
            <PageContainer>
                <Router />
            </PageContainer>
            <Footer />
        </ScreenContainer>
    );
}

export default App;
