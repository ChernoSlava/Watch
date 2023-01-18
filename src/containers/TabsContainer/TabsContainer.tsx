import React, { useContext } from "react";
import { Tabs } from "@components"
import { WatchContext } from "@contexts";

export const TabsContainer: React.FC = (): JSX.Element => {
    const {state, dispatch} = useContext(WatchContext);

    return (
        <Tabs 
            defaultTab={state.common.currentTab}
            items={[
                {
                    id: 0,
                    title: 'Будильник',
                },
                {
                    id: 1,
                    title: 'Мировое время',
                },
                {
                    id: 2,
                    title: 'Секундомер',
                },
                {
                    id: 3,
                    title: 'Таймер',
                }
            ]}
            onSelect={(id) => dispatch({ type: "SET_TAB", payload: id })}    
        />
    )

}