import React from 'react';

import styles from './Button.css';

export type ButtonType = 'red' | 'blue' | 'grey';

const typeCss: {
    [key in ButtonType]: string;
} = {
    'red': styles.Button_red,
    'blue': styles.Button_blue,
    'grey': styles.Button_grey
}

export const Button: React.FC<{
    title: string;
    type: ButtonType;
    isDisabled?: boolean;
    onClick: () => void;
}> = ({ title, type, isDisabled = false, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            disabled={isDisabled}
            className={`${styles.Button} ${typeCss[type] || styles.Button_blue} ${isDisabled ? styles.Button_disabled : ''}`}
        >
            {title}
        </button>
    )
}