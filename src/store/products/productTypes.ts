import { Action } from "redux";
import { IProduct } from "../../defs/Product";

export const TOGGLE_PRODUCT_SERIES = "TOGGLE_PRODUCT_SERIES";
export const TOGGLE_PRODUCT_TYPE = "TOGGLE_PRODUCT_TYPE";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
export const CLEAR_PRODUCT_SERIES_FILTERS = "CLEAR_PRODUCT_SERIES_FILTERS";
export const CLEAR_PRODUCT_TYPE_FILTERS = "CLEAR_PRODUCT_TYPE_FILTERS";
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";

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

export interface IClearProductSeriesFilters extends Action<typeof CLEAR_PRODUCT_SERIES_FILTERS> {}
export interface IClearProductTypeFilters extends Action<typeof CLEAR_PRODUCT_TYPE_FILTERS> {}
export interface IClearAllFilters extends Action<typeof CLEAR_ALL_FILTERS> {}

export type TGenericProductsAction =
    | IToggleProductSeriesAction
    | IToggleProductTypeAction
    | ISetSelectedProduct
    | IClearProductSeriesFilters
    | IClearProductTypeFilters
    | IClearAllFilters;
