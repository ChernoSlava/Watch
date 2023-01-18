import React, {useContext} from "react";
import { WatchContext } from '@contexts';

export const WorldTime = () => {
    const { state } = useContext(WatchContext);

    return state.common.currentTab === 1 && (
        <div>WorldTime</div>
    )
}