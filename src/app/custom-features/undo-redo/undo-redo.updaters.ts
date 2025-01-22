import { UndoRedoState } from "./undo-redo.state";

/*
This commit function will will be invoked when we undo, redo , or modify the state manually.
*/
export function commit(state: UndoRedoState, payload: any): UndoRedoState {
    // if present state is null means it is starting now , so all past and future will be empty and present will be that payload.
    // Otherwise something is already there so we push the present state to the past and update the present as payload
    return state.present === null ?
        {
            past: [],
            present: payload,
            future: []
        } :
        {
            past: [...state.past, state.present],
            present: payload,
            future: []
        }
}

/*

*/
export function undo(state: UndoRedoState): UndoRedoState {

    if (state.past.length === 0) {
        return state;
    }

    // when we undo take the top state which is last state from past array
    const newPresent = state.past[state.past.length - 1];

    // so the updated past will be all state except the last state
    const newPast = state.past.slice(0, state.past.length - 1);

    // so the new state will be past will have the new past, present will the last one from past, future will be the present state at the top / first then all other future states
    return {
        past: newPast,
        present: newPresent,
        future: [state.present, ...state.future]
    };
}

/*

*/
export function redo(state: UndoRedoState): UndoRedoState {

    if (state.future.length === 0) {
        return state;
    }

    // when we redo, we take from future and the first one will be that latest state
    const newPresent = state.future[0];

    // so the updated future will be all state except the first state
    const newFuture = state.future.slice(1);

    // so the new state will be past will have  all the states and the current state at the top / last , present will the top / first one from future, future will have all state except the first state
    return {
        past: [...state.past, state.present],
        present: newPresent,
        future: newFuture
    };
}