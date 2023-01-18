import { TabsContainer } from '@containers';
import { StoreProvider } from '@store';
import { Alarm, StopWatch, Timer, WorldTime } from 'pages';
import React from 'react';

import styles from './App.css';

export const App: React.FC = (): JSX.Element => {

    return (
        <StoreProvider>
            <div className={styles.App}>
                <TabsContainer />
                <Alarm />
                <WorldTime />
                <StopWatch />
                <Timer />
            </div>
        </StoreProvider>
    )
}
