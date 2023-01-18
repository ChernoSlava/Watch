// Общая часть стора
export type CommonStoreType = {
    //Текущая выбранная закладка из TabContainer
    currentTab: number;
}
// Часть стора для секундомера
export type StopWatchStoreType = {
    //Секундомер запущен
    isRunning: boolean;
    //Значение в милисекундах 
    value: number;
}
// Часть стора с Мировым временем
export type WorldTimeStoreType = {
    //Значение в милисекундах 
    value: number;
}
// Часть стора для будильника
export type AlarmStoreType = {
    //Набор будильников
    items: Array<string>;
}
// Часть стора для Таймера
export type TimerStoreType = {
    value: number;
}
// Хранилище(стор) приложения
export type WatchStoreType = {
    common: CommonStoreType;
    stopWatch: StopWatchStoreType;
    worldTime: WorldTimeStoreType;
    alarm: AlarmStoreType;
    timer: TimerStoreType;
}



export type SetTabAction = {
    type: 'SET_TAB';
    payload: number;

}

export type StopWatchRunAction = {
    type: 'STOPWATCH_RUN';
}

export type StopWatchResetAction = {
    type: 'STOPWATCH_RESET';
}

export type StopWatchPauseAction = {
    type: 'STOPWATCH_PAUSE';
}

type Action = SetTabAction | StopWatchRunAction | StopWatchResetAction | StopWatchPauseAction;


export type WatchContextType = {
    dispatch: React.Dispatch<Action>;
    state: WatchStoreType;
}