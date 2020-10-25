import React from 'react';
import WeatherStatusIcon from '../WeatherStatusIcon/WeatherStatusIcon';
import * as styles from './WeatherInfo.module.scss';

interface WeatherInfoProps {
    time?: any,
    date?: any,
    icon: string,
    hourTemp?: number,
    dayTempLow?: number,
    dayTempHigh?: number,
    summary: string
}
const WeatherInfo: React.FC<WeatherInfoProps> = ({time, date, icon, hourTemp, dayTempLow, dayTempHigh, summary}) => {

    return (
        <div className={styles.WeatherInfo}>
            <time className="my-2">{time ? time : date}</time>
            <WeatherStatusIcon icon={icon} summary={summary} className={[]}/>
            {
                hourTemp ?
                    <p className="my-2">{hourTemp}<sup>°</sup></p>
                :
                    <p className={["my-2", styles.DayTemp].join(' ')}>
                        {dayTempHigh}<sup>°</sup>
                        <span>{dayTempLow}<sup>°</sup></span>
                    </p>
            }
        </div>
    )

}

export default WeatherInfo;