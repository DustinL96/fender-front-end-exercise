import {
    ISetSelectedProduct,
    IToggleProductSeriesAction,
    IToggleProductTypeAction,
    SET_SELECTED_PRODUCT,
    TOGGLE_PRODUCT_SERIES,
    TOGGLE_PRODUCT_TYPE,
} from "./productTypes";
import { IProduct } from "../../defs/Product";

export function toggleProductSeries(productSeries: string, toggle: boolean): IToggleProductSeriesAction {
    return { type: TOGGLE_PRODUCT_SERIES, productSeries, toggle };
}

export function toggleProductType(productType: string, toggle: boolean): IToggleProductTypeAction {
    return { type: TOGGLE_PRODUCT_TYPE, productType, toggle };
}

export function setSelectedProduct(product: IProduct | null): ISetSelectedProduct {
    return { type: SET_SELECTED_PRODUCT, product };
}
