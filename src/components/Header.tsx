import React from "react";
import styled from "styled-components";
import { Colors } from "../defs/Colors";
import { Typography } from "@material-ui/core";

const HeaderContainer = styled.div`
    height: 60px;
    padding: 0 3vw;
    display: flex;
    align-items: center;
    box-shadow: ${Colors.header.boxShadow} 0 0 0.625rem 0;
`;

const HeaderText = styled(Typography)`
    color: red;
`;

export default function Header(): JSX.Element {
    return (
        <HeaderContainer>
            <HeaderText variant="h6">Dustin's Guitars</HeaderText>
        </HeaderContainer>
    );
}
