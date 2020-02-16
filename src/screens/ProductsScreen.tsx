import React from "react";
import styled from "styled-components";
import ProductFilter from "../components/ProductFilter";
import ProductGrid from "../components/ProductGrid";

const ScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1350px;
`;

export default function ProductsScreen(): JSX.Element {
    return (
        <ScreenContainer>
            <ProductFilter />
            <ProductGrid />
        </ScreenContainer>
    );
}
