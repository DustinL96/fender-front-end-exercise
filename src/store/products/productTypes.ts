import { Action } from "redux";

export const TOGGLE_PRODUCT_SERIES = "TOGGLE_PRODUCT_SERIES";
export const TOGGLE_PRODUCT_TYPE = "TOGGLE_PRODUCT_TYPE";

export interface IAddProductSeriesAction extends Action<typeof TOGGLE_PRODUCT_SERIES> {
    productSeries: string;
    toggle: boolean;
}

export interface IAddProductTypeAction extends Action<typeof TOGGLE_PRODUCT_TYPE> {
    productType: string;
    toggle: boolean;
}

export type TGenericProductsAction = IAddProductSeriesAction | IAddProductTypeAction;
