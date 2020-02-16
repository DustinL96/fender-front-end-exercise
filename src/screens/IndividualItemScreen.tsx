import { IconButton } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../defs/Product";
import { PRODUCTS } from "../defs/routerPaths";
import { ProductManager } from "../managers/ProductManager";
import IndividualProduct from "../components/IndividualProduct";
import { setSelectedProduct } from "../store/products/productActions";

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
`;

const BackButton = styled(IconButton)`
    && {
        margin-top: 15px;
        margin-left: 1vw;
        align-self: flex-start;
    }
`;

interface IIndividualItemScreenRouterProps {
    match: {
        params: {
            productNo: string;
        };
    };
}

interface IIndividualItemScreenDispatchProps {
    setSelectedProduct: (product: IProduct | null) => void;
}

type TIndividualItemScreenAllProps = IIndividualItemScreenRouterProps & IIndividualItemScreenDispatchProps;

function IndividualItemScreen(props: TIndividualItemScreenAllProps): JSX.Element {
    const [nextScreen, setNextScreen] = useState<{ screenName: string; push: boolean } | null>(null);

    const getSelectedProduct = (): void => {
        const product = ProductManager.getIndividualProduct(props.match.params.productNo);
        if (product !== undefined) {
            props.setSelectedProduct(product);
        } else {
            setNextScreen({ screenName: PRODUCTS, push: false });
        }
    };
    useEffect(getSelectedProduct, []);

    if (nextScreen !== null) {
        return <Redirect push={nextScreen.push} to={nextScreen.screenName} />;
    }

    return (
        <ScreenContainer>
            <BackButton onClick={(): void => setNextScreen({ screenName: PRODUCTS, push: true })}>
                <ArrowBackIos />
            </BackButton>
            <IndividualProduct />
        </ScreenContainer>
    );
}

const mapDispatchToProps = {
    setSelectedProduct,
};

export default connect(null, mapDispatchToProps)(IndividualItemScreen);
