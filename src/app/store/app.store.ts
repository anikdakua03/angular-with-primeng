import { signalStore, withMethods, withState } from "@ngrx/signals";
import { initialAppSlice } from "./app.slice";

export const AppStore = signalStore(
    // To be available for whole application
    { providedIn: 'root' },
    // initial state what will be
    withState(initialAppSlice),
    withMethods((store) => ({
        // methods for global app store
    }))
);