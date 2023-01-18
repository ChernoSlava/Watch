import { CommonReducer } from "./CommonReducer";
import { combineReducers } from "./helpers";
import { StopWatchReducer } from "./StopWatchReducer";

export const RootReducer = combineReducers({
    common: CommonReducer,
    stopWatch: StopWatchReducer
});