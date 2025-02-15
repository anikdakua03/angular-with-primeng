import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { IProduct } from "@shared/interfaces/product";
import { withUndoRedo } from "../../custom-features/undo-redo/undo-redo.feature";
import { initialTableDataSlice } from "./table-data.slice";

export const TableDataStore = signalStore(
    // To be available for whole application
    { providedIn: 'root' },
    // initial state what will be
    withState(initialTableDataSlice),
    // since we need undo redo feature here in Table data component, we add here
    withUndoRedo(), // kept this custom feature above the other methods to be available down the line
    // other methods
    withMethods((store) => ({
        // Table data related methods
        addProduct: (newProduct: IProduct) => {
            const oldProducts = store.products;
            patchState(store, { products: [...oldProducts(), newProduct] });
            store._commit();
        },
        editProduct: (oldIndex: number, newProduct: IProduct) => {
            const oldProducts = store.products;
            debugger
            const newProducts = oldProducts().filter(a => a.id !== oldProducts()[oldIndex].id);

            patchState(store, { products: [...newProducts, newProduct] });
            store._commit();
        },
        deleteProduct: (product: IProduct) => {
            const oldProducts = store.products;
            const oldProduct = oldProducts().find(a => a.title === product.title);

            if (oldProduct === undefined) {
                return;
            }
            const newProducts = oldProducts().filter(prod => prod !== oldProduct);
            patchState(store, { products: newProducts });
            store._commit();
        },
    }))
);