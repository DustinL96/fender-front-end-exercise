import { IProduct } from "../defs/Product";

export interface IProductState {
    selectedProductSeries: string[];
    selectedProductTypes: string[];
    selectedProduct: IProduct | null;
}

export default interface IState {
    product: IProductState;
}
