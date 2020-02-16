import { Checkbox, Divider, FormControlLabel, Typography } from "@material-ui/core";
import { ProductManager } from "../managers/ProductManager";
import React from "react";
import styled from "styled-components";
import { toggleProductSeries, toggleProductType } from "../store/products/productActions";
import { connect } from "react-redux";
import IState from "../store/state";

interface IFilterContainer {
    visibility: string;
    width: string | number;
}

const FilterContainer = styled.div`
    width: 20vw;
    padding: 15px 1vw;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1315px) {
        visibility: ${(props: IFilterContainer): string => props.visibility};
        width: ${(props: IFilterContainer): string | number => props.width};
        padding: 0;
    }
`;

const Title = styled(Typography)`
    && {
        margin-top: 10px;
    }
`;

const FilterOption = styled(FormControlLabel)`
    && {
        margin-left: 5px;
        .MuiTypography-body1 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;

interface IProductFilterOwnProps {
    drawer?: boolean;
}

interface IProductFilterReduxProps {
    selectedProductSeries: string[];
    selectedProductTypes: string[];
}

interface IProductFilterDispatchProps {
    toggleProductSeries: (series: string, toggle: boolean) => void;
    toggleProductType: (type: string, toggle: boolean) => void;
}

type TProductFilterAllProps = IProductFilterOwnProps & IProductFilterReduxProps & IProductFilterDispatchProps;

function ProductFilter(props: TProductFilterAllProps): JSX.Element {
    return (
        <FilterContainer visibility={props.drawer ? "visible" : "collapse"} width={props.drawer ? "auto" : 0}>
            <Typography>Filters</Typography>
            <Divider />
            <Typography variant="subtitle1">Product Series</Typography>
            <Divider />
            {Object.keys(ProductManager.getProductSeries())
                .sort()
                .map((series, index) => (
                    <FilterOption
                        key={index + series}
                        control={
                            <Checkbox
                                checked={props.selectedProductSeries.indexOf(series) !== -1}
                                onChange={(event, checked): void => props.toggleProductSeries(series, checked)}
                            />
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
                        control={
                            <Checkbox
                                checked={props.selectedProductTypes.indexOf(type) !== -1}
                                onChange={(event, checked): void => props.toggleProductType(type, checked)}
                            />
                        }
                        label={type + " (" + ProductManager.getProductTypes()[type].length + ")"}
                    />
                ))}
        </FilterContainer>
    );
}
const mapStateToProps = ({ product }: IState): IProductFilterReduxProps => ({
    selectedProductSeries: product.selectedProductSeries,
    selectedProductTypes: product.selectedProductTypes,
});

const mapDispatchToProps = {
    toggleProductSeries,
    toggleProductType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
