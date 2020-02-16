export interface IProductState {
    selectedProductSeries: string[];
    selectedProductTypes: string[];
}

export default interface IState {
    product: IProductState;
}
