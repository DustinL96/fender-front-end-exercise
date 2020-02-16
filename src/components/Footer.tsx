import React from "react";
import styled from "styled-components";
import { Colors } from "../defs/Colors";
import { Link, Typography } from "@material-ui/core";

const FooterContainer = styled.div`
    border-top: 1px solid ${Colors.footer.border};
    background-color: ${Colors.footer.background};
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Footer(): JSX.Element {
    return (
        <FooterContainer>
            <Typography>Dustin Liu&apos;s Front End Exercise</Typography>
            <Link href="https://github.com/DustinL96/fender-front-end-test" target="_blank">
                Source Code
            </Link>
        </FooterContainer>
    );
}
