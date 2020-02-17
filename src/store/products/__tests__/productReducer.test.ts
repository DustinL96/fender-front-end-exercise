import productReducer from "../productReducer";
import {
    CLEAR_ALL_FILTERS,
    CLEAR_PRODUCT_SERIES_FILTERS,
    CLEAR_PRODUCT_TYPE_FILTERS,
    SET_SELECTED_PRODUCT,
    TOGGLE_PRODUCT_SERIES,
    TOGGLE_PRODUCT_TYPE,
} from "../productTypes";
import { IProductState } from "../../state";
import { documents } from "../../../resources/products.json";

const DEFAULT_PRODUCT_STORE: IProductState = {
    selectedProductSeries: [],
    selectedProductTypes: [],
    selectedProduct: null,
};

const POPULATED_PRODUCT_STORE: IProductState = {
    selectedProductSeries: ["Classic"],
    selectedProductTypes: ["Guitars"],
    selectedProduct: documents[0],
};

describe("Filter State Tests", () => {
    it("Should add selected product series", () => {
        const productSeries = "Classic";
        expect(productReducer(undefined, { type: TOGGLE_PRODUCT_SERIES, productSeries, toggle: true })).toEqual({
            ...DEFAULT_PRODUCT_STORE,
            selectedProductSeries: [productSeries],
        });
    });
    it("Should add selected product type", () => {
        const productType = "Guitars";
        expect(productReducer(undefined, { type: TOGGLE_PRODUCT_TYPE, productType, toggle: true })).toEqual({
            ...DEFAULT_PRODUCT_STORE,
            selectedProductTypes: [productType],
        });
    });

    it("Should remove selected product series", () => {
        const productSeries = "Classic";
        expect(
            productReducer(POPULATED_PRODUCT_STORE, { type: TOGGLE_PRODUCT_SERIES, productSeries, toggle: false }),
        ).toEqual({
            ...POPULATED_PRODUCT_STORE,
            selectedProductSeries: [],
        });
    });
    it("Should remove selected product type", () => {
        const productType = "Guitars";
        expect(
            productReducer(POPULATED_PRODUCT_STORE, { type: TOGGLE_PRODUCT_TYPE, productType, toggle: false }),
        ).toEqual({
            ...POPULATED_PRODUCT_STORE,
            selectedProductTypes: [],
        });
    });

    it("Should clear product series filter", () => {
        expect(productReducer(POPULATED_PRODUCT_STORE, { type: CLEAR_PRODUCT_SERIES_FILTERS })).toEqual({
            ...POPULATED_PRODUCT_STORE,
            selectedProductSeries: [],
        });
    });

    it("Should clear product types filter", () => {
        expect(productReducer(POPULATED_PRODUCT_STORE, { type: CLEAR_PRODUCT_TYPE_FILTERS })).toEqual({
            ...POPULATED_PRODUCT_STORE,
            selectedProductTypes: [],
        });
    });

    it("Should clear all filters", () => {
        expect(productReducer(POPULATED_PRODUCT_STORE, { type: CLEAR_ALL_FILTERS })).toEqual({
            ...POPULATED_PRODUCT_STORE,
            selectedProductSeries: [],
            selectedProductTypes: [],
        });
    });
});

describe("Should populate selectedProductState", () => {
    it("Should add selected product", () => {
        expect(productReducer(undefined, { type: SET_SELECTED_PRODUCT, product: documents[0] })).toEqual({
            ...DEFAULT_PRODUCT_STORE,
            selectedProduct: documents[0],
        });
    });

    it("Should clear selected product", () => {
        expect(productReducer(POPULATED_PRODUCT_STORE, { type: SET_SELECTED_PRODUCT, product: null })).toEqual({
            ...POPULATED_PRODUCT_STORE,
            selectedProduct: null,
        });
    });
});
