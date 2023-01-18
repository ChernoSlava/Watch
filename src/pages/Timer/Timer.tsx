import React, {useContext} from "react";
import { WatchContext } from '@contexts';

export const Timer = () => {
    const { state } = useContext(WatchContext);

    return state.common.currentTab === 3 && (
        <div>Timer</div>
    )
}