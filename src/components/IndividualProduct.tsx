import ProductImage from "./ProductImage";
import { Typography } from "@material-ui/core";
import React from "react";
import { IProduct } from "../defs/Product";
import styled from "styled-components";
import IState from "../store/state";
import { connect } from "react-redux";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw;
    margin-bottom: 20px;
`;

const ProductTitle = styled(Typography)`
    && {
        margin-bottom: 15px;
    }
`;

const ProductInfoContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

const ProductInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const ProductInfoTitle = styled(Typography)`
    && {
        font-weight: bold;
    }
`;

interface IIndividualProductReduxProps {
    selectedProduct: IProduct | null;
}

function IndividualProduct(props: IIndividualProductReduxProps): JSX.Element {
    return (
        <ProductContainer>
            <ProductTitle align="center" variant="h4">
                {props.selectedProduct?.productDisplayName_en || props.selectedProduct?.productSubType}
            </ProductTitle>
            <ProductImage src={props.selectedProduct?.images[0]} alt={props.selectedProduct?.productDisplayName_en} />
            <ProductInfoContainer>
                <ProductInfoColumn>
                    <ProductInfoTitle variant="body1">Brand:</ProductInfoTitle>
                    <ProductInfoTitle variant="body1">Product Type:</ProductInfoTitle>
                    <ProductInfoTitle variant="body1">Product Sub Type:</ProductInfoTitle>
                    <ProductInfoTitle variant="body1">Series:</ProductInfoTitle>
                    <ProductInfoTitle variant="body1">Stock:</ProductInfoTitle>
                    <ProductInfoTitle variant="body1">Product No:</ProductInfoTitle>
                </ProductInfoColumn>
                <ProductInfoColumn>
                    <Typography variant="body1">{props.selectedProduct?.brand}</Typography>
                    <Typography variant="body1">{props.selectedProduct?.productType}</Typography>
                    <Typography variant="body1">{props.selectedProduct?.productSubType}</Typography>
                    <Typography variant="body1">{props.selectedProduct?.series}</Typography>
                    <Typography variant="body1">
                        {props.selectedProduct?.inStock_US_CONSUMER === "inStock" ? "In Stock" : "Out of Stock"}
                    </Typography>
                    <Typography variant="body1">{props.selectedProduct?.productNo}</Typography>
                </ProductInfoColumn>
            </ProductInfoContainer>
        </ProductContainer>
    );
}

const mapStateToProps = ({ product }: IState): IIndividualProductReduxProps => ({
    selectedProduct: product.selectedProduct,
});

export default connect(mapStateToProps)(IndividualProduct);
