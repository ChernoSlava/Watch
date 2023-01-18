import React, {useContext} from "react";
import { WatchContext } from '@contexts';

export const Alarm = () => {
    const { state } = useContext(WatchContext);

    return state.common.currentTab === 0 && (
        <div>Alarm</div>
    )
}