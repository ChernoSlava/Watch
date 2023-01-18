import { CommonStoreType, SetTabAction } from "@types";

export const CommonReducer = (
    state: CommonStoreType, 
    action: SetTabAction
): CommonStoreType => {
        
    const { type, payload } = action;

    switch (type) {
        case 'SET_TAB': {
            return {
                ...state,
                currentTab: payload
            };
        }

        default: {
            return state;
        }
    }
}
