import { WatchStoreType } from "@types";

export const InitialState: WatchStoreType = {
    common: {
        currentTab: 0
    },
    stopWatch: {
        isRunning: false,
        value: 0
    },
    worldTime: {
        value: 0
    },
    alarm: {
        items: []
    },
    timer: {
        value: 0
    }
}
