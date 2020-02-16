import { ProductManager } from "../managers/ProductManager";
import { IProduct } from "../defs/Product";
import ProductImage from "./ProductImage";
import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import IState from "../store/state";
import { connect } from "react-redux";

const ProductGridContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 77vw;
    padding: 15px 0;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    margin-left: 25px;
`;

interface IProductGridReduxProps {
    selectedProductSeries: string[];
    selectedProductTypes: string[];
}

function ProductGrid(props: IProductGridReduxProps): JSX.Element {
    return (
        <ProductGridContainer>
            {ProductManager.getDisplayedProducts(props.selectedProductSeries, props.selectedProductTypes).map(
                (product: IProduct, index: number) => (
                    <ProductContainer key={index + product.productNo}>
                        <ProductImage
                            src={product.images[0]}
                            alt={product.productDisplayName_en || product.productSubType}
                        />
                        <Typography variant="body1" align="center">
                            {product.productDisplayName_en || product.productSubType}
                        </Typography>
                    </ProductContainer>
                ),
            )}
        </ProductGridContainer>
    );
}

const mapStateToProps = ({ product }: IState): IProductGridReduxProps => ({
    selectedProductSeries: product.selectedProductSeries,
    selectedProductTypes: product.selectedProductTypes,
});

export default connect(mapStateToProps)(ProductGrid);
