export interface IProduct {
    docType: string;
    salesStatus_US_CONSUMER: string;
    skuDisplayName_en: string[];
    refinementColor_en: string[];
    partNumber: string[];
    color_en: string[];
    inStock_US_CONSUMER: string;
    upc: string[];
    productNo: string;
    productDisplayName_en?: string;
    series: string;
    seriesDispRk?: number;
    prodSubTypeId: string;
    brandId: string;
    subBrandDispRk: number;
    productSubType: string;
    productType: string;
    bodyShape?: string;
    prodTypeId: string;
    images: string[];
    brand: string;
    bodyShapeId?: string;
    seriesId: string;
    brandDispRk: number;
    documents?: string[];
}
