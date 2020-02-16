import {
    TOGGLE_PRODUCT_SERIES,
    TOGGLE_PRODUCT_TYPE,
    IAddProductSeriesAction,
    IAddProductTypeAction,
} from "./productTypes";

export function addProductSeries(productSeries: string, toggle: boolean): IAddProductSeriesAction {
    return { type: TOGGLE_PRODUCT_SERIES, productSeries, toggle };
}

export function addProductType(productType: string, toggle: boolean): IAddProductTypeAction {
    return { type: TOGGLE_PRODUCT_TYPE, productType, toggle };
}
