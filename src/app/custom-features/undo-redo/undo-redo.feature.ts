import { computed, effect, signal } from "@angular/core";
import { getState, patchState, signalStoreFeature, withComputed, withHooks, withMethods, withProps } from "@ngrx/signals";
import { initialUndoRedoState, UndoRedoState } from "./undo-redo.state";
import { commit, redo, undo } from "./undo-redo.updaters";

// Custom signal store feature using NgRx Signal store
export function withUndoRedo() {
    return signalStoreFeature(
        // withState() // not using withStates to avoid everything using the past , future state as the global state which also leads to infinite recursion between stacks

        // so using props , which is like some private thing, not part of the state even if they hold the states, its not considered as part of state machine, part of store itself
        withProps(_ => ({
            // everything we use with '_' as prefix considered as private field or property [new feature added in NgRx/signals]
            _stacks: signal<UndoRedoState>(initialUndoRedoState)
        })),
        withComputed(store => ({
            // 2 computed methods based on the store stacks
            canUndo: computed(() => store._stacks().past.length > 0),
            canRedo: computed(() => store._stacks().future.length > 0),
        })),
        withMethods(store => ({
            // private method
            _commit: () => {
                // gets the current state from the store
                const present = getState(store);
                // create a new state by committing based on present 
                const newStacks = commit(store._stacks(), present);
                // then sets the store stack with new stack states
                store._stacks.set(newStacks);
            },
            // public methods
            undo: () => {
                // gets the state from undo updater
                const newStacks = undo(store._stacks());
                // sets the store stack with the stacks from undo
                store._stacks.set(newStacks);
                // updates the store with present
                // to update the store always use patchState method
                patchState(store, newStacks.present);
            },
            redo: () => {
                // gets the state from redo updater
                const newStacks = redo(store._stacks());
                // sets the store stack with the stacks from redo
                store._stacks.set(newStacks);
                // updates the store with present
                // to update the store always use patchState method
                patchState(store, newStacks.present);
            }
        })),
        withHooks(store => ({
            // at the beginning we need some initial state, so to have it, we can use withHooks
            onInit: () => {
                // it will commit once , kind if initializing the state
                store._commit();

                // debug purpose to view the states
                effect(() => {
                    console.log("Current stack state : ", store._stacks());
                });
            }
        }))
    );
}