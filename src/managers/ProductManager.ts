import { IProduct } from "../defs/Product";
import { documents } from "../resources/products.json";

interface IProductDict {
    [key: string]: IProduct[];
}

class _ProductManager {
    private products: IProduct[];
    private readonly productSeries: IProductDict;
    private readonly productTypes: IProductDict;

    constructor(products: IProduct[]) {
        this.products = products;
        this.productSeries = {};
        this.productTypes = {};

        documents.map((product: IProduct): void => {
            if (this.productTypes[product.productType] === undefined) {
                this.productTypes[product.productType] = [product];
            } else {
                this.productTypes[product.productType].push(product);
            }

            if (this.productSeries[product.series] === undefined) {
                this.productSeries[product.series] = [product];
            } else {
                this.productSeries[product.series].push(product);
            }
        });
    }

    getDisplayedProducts = (productSeries: string[] = [], productTypes: string[] = []): IProduct[] => {
        return this.products.filter(
            (product): boolean =>
                (productSeries.length === 0 || productSeries.indexOf(product.series) !== -1) &&
                (productTypes.length === 0 || productTypes.indexOf(product.productType) !== -1),
        );
    };

    getIndividualProduct = (productNo: string): IProduct | undefined => {
        return this.products.find((product: IProduct): boolean => product.productNo === productNo);
    };

    getProductTypes = (): IProductDict => {
        return this.productTypes;
    };

    getProductSeries = (): IProductDict => {
        return this.productSeries;
    };
}

const ProductManager = new _ProductManager(documents);
export { ProductManager };
