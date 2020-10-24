import React from 'react';
import * as styles from './TabButton.module.scss';


interface TabButtonProps {
    label: string,
    value: string,
    className: string[],
    active: boolean,
    onClick(value: string): void
}

const TabButton: React.FC<TabButtonProps> = ({label, value, className, active, onClick}) => {
    return (
        <button
            type="button"
            onClick={()=>onClick(value)}
            className={[...className, styles.TabButton, active? 'active': null].join(' ')}
        >
            {label}
        </button>
    )
}

export default TabButton;