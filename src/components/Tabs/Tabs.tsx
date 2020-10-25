import React, {useState} from 'react';
import * as styles from './Tabs.module.scss';

import TabButton from './TabButton/TabButton';

import {Daily, Currently, HourlyData} from '../../utils/Interfaces'
import TabBody from './TabBody/TabBody';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import FahrenheitToCelsius from '../../utils/FahrenheitToCelsius';

interface TabsProps{
    hourlyWeather: HourlyData,
    dailyWeather: Daily
}

const Tabs: React.FC<TabsProps> = ({hourlyWeather, dailyWeather}) => {

    const [activeTab, setActiveTab] = useState('hourly');

    let tabs= [
        {
            label: "Hourly",
            value: "hourly"
        },{
            label: "Daily",
            value: "daily"
        },
    ]

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <section>
            <header className={styles.TabHeader}>
                {
                    tabs.map(tab => (
                        <TabButton
                            key={tab.value}
                            value={tab.value}
                            onClick={setActiveTab}
                            active={activeTab === tab.value ? true:false}
                            className={[]}
                            label={tab.label}
                        />
                    ))
                }
            </header>

            {
                activeTab === 'hourly'? 
                    <TabBody className={[styles.scrollable, 'd-flex']}>
                        {
                            hourlyWeather.data?
                                hourlyWeather.data.slice(0, 23).map(hour => {
                                    let time = new Date(hour.time * 1000);
                                    let displayedTime;
                                    let hours = time.getHours().toString();
                                    let minutes = time.getMinutes().toString();

                                    if (hours === new Date().getHours().toString()) {
                                        displayedTime = 'now'
                                    } else {
                                        displayedTime = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`
                                    }
                                    return(
                                        <WeatherInfo
                                            key={displayedTime}
                                            time={displayedTime}
                                            summary={hour.summary}
                                            icon={hour.icon}
                                            hourTemp={localStorage.getItem('tempMeasure') === 'c'? FahrenheitToCelsius(hour.temperature):hour.temperature}
                                        />
                                    )
                                })
                            :null
                        }
                    </TabBody>
                :
                    <TabBody className={[styles.scrollable, 'd-flex']}>
                        {
                            dailyWeather.data?
                                dailyWeather.data.map(day => {
                                    let time = new Date(day.time * 1000);

                                    let displayedDay = time.getDay();

                                    let date = time.getDate();

                                    
                                    let displayedTime = `${days[displayedDay]}, ${date}`

                                    return (
                                        <WeatherInfo
                                            key={day.time}
                                            date={displayedTime}
                                            summary={day.summary}
                                            icon={day.icon}
                                            dayTempHigh={localStorage.getItem('tempMeasure') === 'c'? FahrenheitToCelsius(day.temperatureHigh) : day.temperatureHigh}
                                            dayTempLow={localStorage.getItem('tempMeasure') === 'c'? FahrenheitToCelsius(day.temperatureLow) : day.temperatureLow }
                                        />
                                    )
                                })
                            :null
                        }
                    </TabBody>
            }

        </section>
    )

}

export default Tabs;