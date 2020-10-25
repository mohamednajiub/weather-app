import React from 'react';
import * as styles from './TabBody.module.scss';


interface TabBodyProps{
    children: any,
    className: string[]
}

const TabBody: React.FC<TabBodyProps> = ({children, className}) => {
    return(
        <section className={[...className].join(' ')}>
            {children}
        </section>
    )
}

export default TabBody;