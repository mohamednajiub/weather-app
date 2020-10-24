import React from 'react';
import * as styles from './CurrentLocationData.module.scss';
import WeatherStatusIcon from '../WeatherStatusIcon/WeatherStatusIcon';
import CurrentLocationTemp from './CurrentLocationTemp/CurrentLocationTemp';

interface CurrentLocationDataProps {
    city: string;
    country?: string;
    currentTemp: number,
    icon: string;
    currSummary: string;
}

const CurrentLocationData: React.FC<CurrentLocationDataProps> = ({
    city,
    country,
    icon,
    currSummary,
}) => {

    const date = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <section className={styles.CurrentLocationData}>
            <h2 className="font-bold my-1">{city}</h2>
            <time className="font-bold mb-2">{days[date.getDay()]} {date.getDate()}, {date.getFullYear()}</time>
            <WeatherStatusIcon className={['mt-3 mb-1']} icon={icon} summary={currSummary}/>
            <p className="my-0 font-bold">{currSummary}</p>
        </section>
    )

}

export default CurrentLocationData;