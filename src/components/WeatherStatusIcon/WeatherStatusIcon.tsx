import React from 'react';


import Sunny from '../../images/sunny.png';
import ClearNight from '../../images/clear-night.png';
import PartlyCloudDay from '../../images/partly-cloud-day.png';
import PartlyCloudNight from '../../images/partly-cloudy-night.png';
import Rainy from '../../images/rainy.png';
import Foggy from '../../images/foggy.png';
import Windy from '../../images/windy.png';
import Cloudy from '../../images/cloudy.png';
import Snow from '../../images/snow.png';

interface WeatherStatusIconProps {
    icon: string;
    summary: string;
    className: string[];
}

const WeatherStatusIcon: React.FC<WeatherStatusIconProps>  = ({icon, summary, className}) => {

    const weatherIcons: any = {
        "clear-day": Sunny,
        "clear-night": ClearNight,
        "partly-cloudy-day": PartlyCloudDay,
        "partly-cloudy-night": PartlyCloudNight,
        "rain": Rainy,   
        "foggy": Foggy,
        "wind": Windy,
        "snow": Snow,
        "cloudy": Cloudy,
    };
        
    return (
        <div className={[...className].join(' ')}>
            <img src={weatherIcons[`${icon}`]} alt={summary} />
        </div>
    );
    
}

export default WeatherStatusIcon;