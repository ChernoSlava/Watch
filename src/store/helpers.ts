import { WatchStoreType } from "@types";
import { InitialState } from "./InitialState";

// @ts-ignore
export function combineReducers(reducers) {
    // @ts-ignore 
    return (state = InitialState, action) => {
        const newState = {};
        for (let key in reducers) {
            // @ts-ignore
            newState[key] = reducers[key](state[key], action);
        }
        return newState as WatchStoreType;
    }
}