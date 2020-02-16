import React from "react";
import styled from "styled-components";
import { Colors } from "../defs/Colors";

const FooterContainer = styled.div`
    border-top: 1px solid ${Colors.footer.border};
    background-color: ${Colors.footer.background};
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    position: relative;
`;

export default function Footer(): JSX.Element {
    return <FooterContainer />;
}
