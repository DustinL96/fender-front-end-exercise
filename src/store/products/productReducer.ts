import {
    SET_SELECTED_PRODUCT,
    TGenericProductsAction,
    TOGGLE_PRODUCT_SERIES,
    TOGGLE_PRODUCT_TYPE,
} from "./productTypes";
import { IProductState } from "../state";

const DEFAULT_PRODUCT_STORE: IProductState = {
    selectedProductSeries: [],
    selectedProductTypes: [],
    selectedProduct: null,
};

function productReducer(state: IProductState = DEFAULT_PRODUCT_STORE, action: TGenericProductsAction): IProductState {
    switch (action.type) {
        case TOGGLE_PRODUCT_TYPE: {
            if (action.toggle) {
                return { ...state, selectedProductTypes: [...state.selectedProductTypes, action.productType] };
            }
            const typeIndex = state.selectedProductTypes.indexOf(action.productType);
            return {
                ...state,
                selectedProductTypes: [
                    ...state.selectedProductTypes.slice(0, typeIndex),
                    ...state.selectedProductTypes.slice(typeIndex + 1),
                ],
            };
        }

        case TOGGLE_PRODUCT_SERIES: {
            if (action.toggle) {
                return { ...state, selectedProductSeries: [...state.selectedProductSeries, action.productSeries] };
            }
            const seriesIndex = state.selectedProductSeries.indexOf(action.productSeries);
            return {
                ...state,
                selectedProductSeries: [
                    ...state.selectedProductSeries.slice(0, seriesIndex),
                    ...state.selectedProductSeries.slice(seriesIndex + 1),
                ],
            };
        }

        case SET_SELECTED_PRODUCT: {
            return { ...state, selectedProduct: action.product };
        }

        default:
            return state;
    }
}

export default productReducer;
