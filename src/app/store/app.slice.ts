import { IProduct } from "../shared/interfaces/product";

export interface AppSlice {
    value: IProduct[];
}

export const initialAppSlice: AppSlice = {
    value: []
};