import React, {useContext} from "react";
import { WatchContext } from '@contexts';

export const StopWatch = () => {
     const { state } = useContext(WatchContext);

    return state.common.currentTab === 2 && (
        <div>StopWatch</div>
    )
}