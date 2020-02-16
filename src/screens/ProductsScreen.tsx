import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import ProductFilter from "../components/ProductFilter";
import ProductGrid from "../components/ProductGrid";
import { IProduct } from "../defs/Product";
import { setSelectedProduct } from "../store/products/productActions";
import { connect } from "react-redux";

const ScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1350px;
`;

interface IProductsScreenDispatchprops {
    setSelectedProduct: (product: IProduct | null) => void;
}

function ProductsScreen(props: IProductsScreenDispatchprops): JSX.Element {
    const [nextScreen, setNextScreen] = useState<string | null>(null);

    const clearSelectedProduct = (): void => {
        props.setSelectedProduct(null);
    };
    useEffect(clearSelectedProduct, []);

    if (nextScreen) {
        return <Redirect push to={nextScreen} />;
    }

    return (
        <ScreenContainer>
            <ProductFilter />
            <ProductGrid setNextScreen={(screen: string): void => setNextScreen(screen)} />
        </ScreenContainer>
    );
}

const mapDispatchToProps = {
    setSelectedProduct,
};

export default connect(null, mapDispatchToProps)(ProductsScreen);
