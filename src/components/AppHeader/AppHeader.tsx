import React from 'react';
import * as styles from './AppHeader.module.scss';

const AppHeader = () => {
    return (
        <header className={styles.AppHeader}>
            <div className="container">
                <div className="row align-items-center justigy-content-between">
                    <div className="col-8 col-md-6">
                        <h1 className="font-bold">INSTAWEATHER</h1>
                    </div>
                    
                    <div className="col-4 col-md-6 measure-units d-flex justify-content-end">
                        <button type="button">C</button>
                        <button type="button" className={styles.active}>F</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader