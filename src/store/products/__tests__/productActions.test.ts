import {
    CLEAR_ALL_FILTERS,
    CLEAR_PRODUCT_SERIES_FILTERS,
    CLEAR_PRODUCT_TYPE_FILTERS,
    SET_SELECTED_PRODUCT,
    TOGGLE_PRODUCT_SERIES,
    TOGGLE_PRODUCT_TYPE,
} from "../productTypes";
import {
    clearAllFilters,
    clearSeriesFilters,
    clearTypesFilters,
    setSelectedProduct,
    toggleProductSeries,
    toggleProductType,
} from "../productActions";

describe("Toggle Filter Action Tests", () => {
    it("Toggle Series Filter", () => {
        const productSeries = "Classic";
        const toggle = true;

        const expectedAction = {
            type: TOGGLE_PRODUCT_SERIES,
            productSeries,
            toggle,
        };
        expect(toggleProductSeries(productSeries, toggle)).toEqual(expectedAction);
    });
    it("Toggle Product Filter", () => {
        const productType = "Guitars";
        const toggle = true;

        const expectedAction = {
            type: TOGGLE_PRODUCT_TYPE,
            productType,
            toggle,
        };
        expect(toggleProductType(productType, toggle)).toEqual(expectedAction);
    });
});

describe("Set Selected Product Action Test", () => {
    it("Sets Selected Product", () => {
        const product = null;

        const expectedAction = {
            type: SET_SELECTED_PRODUCT,
            product,
        };
        expect(setSelectedProduct(product)).toEqual(expectedAction);
    });
});

describe("Clear Filter Actions Test", () => {
    it("Clears Series Filter", () => {
        const expectedAction = { type: CLEAR_PRODUCT_SERIES_FILTERS };
        expect(clearSeriesFilters()).toEqual(expectedAction);
    });
    it("Clears Types Filter", () => {
        const expectedAction = { type: CLEAR_PRODUCT_TYPE_FILTERS };
        expect(clearTypesFilters()).toEqual(expectedAction);
    });
    it("Clears All Filters", () => {
        const expectedAction = { type: CLEAR_ALL_FILTERS };
        expect(clearAllFilters()).toEqual(expectedAction);
    });
});
