import { 
    StopWatchStoreType, 
    StopWatchRunAction,
    StopWatchResetAction,
    StopWatchPauseAction,
} from "@types";

type StopWatchAction = | StopWatchRunAction | StopWatchResetAction | StopWatchPauseAction;

export const StopWatchReducer = (
    state: StopWatchStoreType, 
    action: StopWatchAction
): StopWatchStoreType => {
        
    const { type } = action;
    
    switch (type) {
        case 'STOPWATCH_RUN': {
            return {
                ...state,
                isRunning: true
            };
        }

        case 'STOPWATCH_PAUSE': {
            return {
                ...state,
                isRunning: true
            };
        }

        case 'STOPWATCH_RESET': {
            return {
                ...state,
                value: 0
            };
        }

        default: {
            return state;
        }
    }
}
