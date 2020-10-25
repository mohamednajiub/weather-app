import React, {useState, useEffect} from 'react';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentLocationData from './components/CurrentLocationData/CurrentLocationData';
import CurrentLocationTemp from './components/CurrentLocationData/CurrentLocationTemp/CurrentLocationTemp';
import usePosition from './utils/usePositionHook';
import {GeoLocationAPIResponse, WeatherAPIResponse, Currently, Daily, HourlyData} from './utils/Interfaces'
import FahrenheitToCelsius from './utils/FahrenheitToCelsius';

import { get } from './utils/Axios';
import Tabs from './components/Tabs/Tabs';

const App = () => {

  const {latitude, longitude, error}: any = usePosition();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");


  const [currWeather, setCurrWeather] = useState({} as Currently);

  const [dailyWeather, setDailyWeather] = useState({} as Daily);
  const [hourlyWeather, setHourlyWeather] = useState({} as HourlyData);


  const [tempMeasure, setTempMeasure] = useState(localStorage.getItem('tempMeasure'));


  const getLocation = async () => {
    const locationData = await get<GeoLocationAPIResponse>('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3/');
    console.log(locationData)
    setCity(locationData.city);
    setCountry(locationData.country_name);
  }

  const getWeather = async () => {
    const weatherData = await get<WeatherAPIResponse>(`https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${latitude},${longitude}`);

    setCurrWeather(weatherData.currently);
    setDailyWeather(weatherData.daily);
    setHourlyWeather(weatherData.hourly);
  }

  useEffect(()=>{
    getLocation();
    if(latitude && longitude){
      getWeather();
    }

    if(!localStorage.getItem('tempMeasure')){
      localStorage.setItem('tempMeasure', 'f')  
    }
    
  }, [latitude, longitude])


  const changeMeasure = (measure: string) => {
    setTempMeasure(measure);
    localStorage.setItem('tempMeasure', measure)
  }

  return (
    <div className="App">
      <AppHeader changeMeasure={changeMeasure}/>

      <div className="container">
        <div className="row align-items-start">
          <div className="col-6">
            <CurrentLocationData
              city={city}
              country={country}
              icon={currWeather.icon}
              currSummary={currWeather.summary}
            />
          </div>
          <div className="col-6">
            <CurrentLocationTemp 
              dailySummary={dailyWeather.data?.[0].summary}
              currentTemp={tempMeasure === 'c'? FahrenheitToCelsius(currWeather.temperature):currWeather.temperature}
              dayTempHigh={tempMeasure === 'c'? FahrenheitToCelsius(dailyWeather.data?.[0].temperatureHigh): dailyWeather.data?.[0].temperatureHigh}
              dayTempLow={tempMeasure === 'c'? FahrenheitToCelsius(dailyWeather.data?.[0].temperatureLow): dailyWeather.data?.[0].temperatureLow}
            />
          </div>
        </div>
      </div>


      <div className="container">
        <Tabs dailyWeather={dailyWeather} hourlyWeather={hourlyWeather}/>
      </div>
      
    </div>
  );
}

export default App;
