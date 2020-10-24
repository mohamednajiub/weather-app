import React from 'react';
import * as styles from './CurrentLocationData.module.scss';
import WeatherStatusIcon from '../WeatherStatusIcon/WeatherStatusIcon';

interface CurrentLocationDataProps {
    city: string;
    country: string;
    summary: string;
    icon: string;
}

const CurrentLocationData: React.FC<CurrentLocationDataProps> = ({city, country, summary, icon}) => {

    const date = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <section className={styles.CurrentLocationData}>
            <div className="container">
                <h2 className="font-bold mb-1">{city}</h2>
                <time className="font-bold">{days[date.getDay()]} {date.getDate()}, {date.getFullYear()}</time>
                <WeatherStatusIcon className={['mt-4']} icon={icon} summary={summary}/>
                <p className="my-1 font-bold">{summary}</p>
            </div>
        </section>
    )

}

export default CurrentLocationData;