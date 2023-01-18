import React from 'react';

import styles from './TimerText.css';

export type TimerTextType = 'lg' | 'sm';

const sizeCss: {
    [key in TimerTextType]: string;
} = {
    'lg': styles.TimerText_lg,
    'sm': styles.TimerText_sm,
}

export const TimerText: React.FC<{
    size: TimerTextType;
    min: string;
    sec: string;
    milsec: string;
}> = ({ min, size, sec, milsec }) => {
    return (
        <span className={`${styles.TimerText} ${sizeCss[size] || styles.TimerText_lg}`}>
            {min}:{sec}.{milsec}
        </span>
    )
}