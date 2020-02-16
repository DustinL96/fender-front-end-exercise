import { Action } from "redux";
import { IProduct } from "../../defs/Product";

export const TOGGLE_PRODUCT_SERIES = "TOGGLE_PRODUCT_SERIES";
export const TOGGLE_PRODUCT_TYPE = "TOGGLE_PRODUCT_TYPE";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";

export interface IToggleProductSeriesAction extends Action<typeof TOGGLE_PRODUCT_SERIES> {
    productSeries: string;
    toggle: boolean;
}

export interface IToggleProductTypeAction extends Action<typeof TOGGLE_PRODUCT_TYPE> {
    productType: string;
    toggle: boolean;
}

export interface ISetSelectedProduct extends Action<typeof SET_SELECTED_PRODUCT> {
    product: IProduct | null;
}

export type TGenericProductsAction = IToggleProductSeriesAction | IToggleProductTypeAction | ISetSelectedProduct;
