export interface UndoRedoState {
    readonly past: unknown[];
    readonly present: unknown;
    readonly future: unknown[];
}

export const initialUndoRedoState: UndoRedoState = {
    past: [],
    present: null,
    future: []
};

/*
Simple Idea of this Undo-Redo :
- We have 2 stacks of past and future respectively.
- Every-time we "Undo", we pop from past stack and set to present state and also push to future stack.
- Similarly every time we "Redo", we pop from future stack and set to present state and also push to past stack. 
- Now if we directly modify or change present state, then we push the present state to past stack and then update the present state and also reset the future stack , since we manually change the present state.
- So we can only "Redo" after "Undo".
*/