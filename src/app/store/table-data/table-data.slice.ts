import { IProduct } from "@shared/interfaces/product";

export interface TableDataSlice {
    products: IProduct[];
}

export const initialTableDataSlice: TableDataSlice = {
    products: []
};