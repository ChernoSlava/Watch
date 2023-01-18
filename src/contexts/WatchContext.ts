import React from 'react';
import { InitialState } from 'store';
import {WatchContextType} from '@types'

export const WatchContextInitialValues: WatchContextType = {
    state: InitialState,
    dispatch: () => {},
}

export const WatchContext = React.createContext(WatchContextInitialValues);
