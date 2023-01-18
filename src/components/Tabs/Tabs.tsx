import React, { useState } from "react";
import styles from './Tabs.css';

export type TabItemType = {
    id: number;
    title: string;
}

export type TabListType = Array<TabItemType>

export const Tabs: React.FC<({
    items: TabListType;
    defaultTab: number;
    onSelect: (id: number) => void;

})> = ({items, defaultTab, onSelect}): JSX.Element => {
    const [ currentTab, setCurrentTab ] = useState(defaultTab);

    return <div className={styles.Tabs}>
        {items?.map(x => 
            <div 
            key={x.id} 
            className={`${styles.Tab} ${currentTab === x.id ? styles.Tab_active : ''}`}
            onClick={() => {
                setCurrentTab(x.id);
                onSelect(x.id);
            }}
            >{x.title}
            </div>)}
    </div>
}