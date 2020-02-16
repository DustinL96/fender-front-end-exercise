import { Checkbox, Divider, FormControlLabel, Typography } from "@material-ui/core";
import { ProductManager } from "../managers/ProductManager";
import React from "react";
import styled from "styled-components";
import { addProductSeries, addProductType } from "../store/products/productActions";
import { connect } from "react-redux";

const FilterContainer = styled.div`
    width: 23vw;
    padding: 15px 1vw;
    display: flex;
    flex-direction: column;
`;

const Title = styled(Typography)`
    && {
        margin-top: 10px;
    }
`;

const FilterOption = styled(FormControlLabel)`
    && {
        .MuiTypography-body1 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;

interface IProductFilterDispatchProps {
    addProductSeries: (series: string, toggle: boolean) => void;
    addProductType: (type: string, toggle: boolean) => void;
}

function ProductFilter(props: IProductFilterDispatchProps): JSX.Element {
    return (
        <FilterContainer>
            <Title>Filters</Title>
            <Divider />
            <Typography variant="subtitle1">Product Series</Typography>
            <Divider />
            {Object.keys(ProductManager.getProductSeries())
                .sort()
                .map((series, index) => (
                    <FilterOption
                        key={index + series}
                        control={
                            <Checkbox onChange={(event, checked): void => props.addProductSeries(series, checked)} />
                        }
                        label={series + " (" + ProductManager.getProductSeries()[series].length + ")"}
                    />
                ))}
            <Title variant="subtitle1">Product Type</Title>
            <Divider />
            {Object.keys(ProductManager.getProductTypes())
                .sort()
                .map((type, index) => (
                    <FilterOption
                        key={index + type}
                        control={<Checkbox onChange={(event, checked): void => props.addProductType(type, checked)} />}
                        label={type + " (" + ProductManager.getProductTypes()[type].length + ")"}
                    />
                ))}
        </FilterContainer>
    );
}

const mapDispatchToProps = {
    addProductSeries,
    addProductType,
};

export default connect(null, mapDispatchToProps)(ProductFilter);
