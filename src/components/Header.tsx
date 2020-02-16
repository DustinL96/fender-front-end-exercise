import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../defs/Colors";
import { Drawer, IconButton, Typography } from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import ProductFilter from "./ProductFilter";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../defs/routerPaths";
import { IProduct } from "../defs/Product";
import IState from "../store/state";
import { connect } from "react-redux";

const HeaderContainer = styled.div`
    height: 60px;
    max-height: 60px;
    min-height: 60px;
    padding: 0 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${Colors.header.boxShadow} 0 0 0.625rem 0;
`;

const Icon = styled(IconButton)`
    && {
        visibility: collapse;
        color: ${Colors.primary};

        @media only screen and (max-width: 1315px) {
            visibility: visible;
        }
    }
`;

const ExitButton = styled(IconButton)`
    && {
        align-self: flex-end;
        padding: 10px 10px 0 0;
    }
`;

const ProductFilterContainer = styled.div`
    padding: 0 15px;
`;

const TextLink = styled(Link)`
    && {
        text-decoration: none;
    }
`;

const HeaderText = styled(Typography)`
    color: ${Colors.primary};
`;

interface IHeaderReduxProps {
    selectedProduct: IProduct | null;
}

function Header(props: IHeaderReduxProps): JSX.Element {
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);

    return (
        <HeaderContainer>
            <TextLink to={PRODUCTS}>
                <HeaderText variant="h6">Dustin&apos;s Guitars</HeaderText>
            </TextLink>
            {props.selectedProduct === null && (
                <Icon onClick={(): void => setIsFilterDrawerOpen(true)}>
                    <Menu />
                </Icon>
            )}
            <Drawer anchor="right" open={isFilterDrawerOpen} onClose={(): void => setIsFilterDrawerOpen(false)}>
                <ExitButton onClick={(): void => setIsFilterDrawerOpen(false)}>
                    <Close />
                </ExitButton>
                <ProductFilterContainer>
                    <ProductFilter drawer />
                </ProductFilterContainer>
            </Drawer>
        </HeaderContainer>
    );
}

const mapStateToProps = ({ product }: IState): IHeaderReduxProps => ({
    selectedProduct: product.selectedProduct,
});

export default connect(mapStateToProps)(Header);
