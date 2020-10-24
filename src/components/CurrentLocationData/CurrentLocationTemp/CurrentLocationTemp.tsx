import React from 'react';
import * as styles from './CurrentLocationTemp.module.scss';

interface CurrentLocationTempProps{
    currentTemp: number,
    dayTempHigh: number,
    dayTempLow: number,
    dailySummary: string
}

const CurrentLocationTemp: React.FC<CurrentLocationTempProps> = ({currentTemp, dayTempHigh, dayTempLow, dailySummary}) => {

    return (
        <section className={styles.CurrentLocationTemp}>
            {
                currentTemp?
                    <p className={["font-bold", styles.CurrentTemp, "my-2"].join(' ')}>{Math.round(currentTemp)}<sup>°</sup></p>
                :null
            }
            <p className={[styles.TodayTemp, "my-2"].join(' ')}>{dayTempHigh}<sup>°</sup> / {dayTempLow}<sup>°</sup></p>
            <p className={[styles.TodaySummary, "my-2"].join(' ')}>{dailySummary}</p>
        </section>
    )

}

export default CurrentLocationTemp;