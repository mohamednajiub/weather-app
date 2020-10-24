import React, {useState, useEffect} from 'react';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentLocationData from './components/CurrentLocationData/CurrentLocationData';
import CurrentLocationTemp from './components/CurrentLocationData/CurrentLocationTemp/CurrentLocationTemp';
import usePosition from './utils/usePositionHook';
import {GeoLocationAPIResponse, WeatherAPIResponse, Currently, Daily} from './utils/Interfaces'

import { get } from './utils/Axios';
import Tabs from './components/Tabs/Tabs';

const App = () => {

  const {latitude, longitude, error}: any = usePosition();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");


  const [currWeather, setCurrWeather] = useState({} as Currently);

  const [dailyWeather, setDailyWeather] = useState({} as Daily);
  const [hourlyWeather, setHourlyWeather] = useState({});


  const getLocation = async () => {
    const locationData = await get<GeoLocationAPIResponse>('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3/');
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
    
  }, [latitude, longitude])

  return (
    <div className="App">
      <AppHeader/>

      <div className="container">
        <div className="row align-items-start">
          <div className="col-6">
            <CurrentLocationData
              city={city}
              country={country}
              currentTemp={currWeather.temperature}
              icon={currWeather.icon}
              currSummary={currWeather.summary}
            />
          </div>
          <div className="col-6">
            <CurrentLocationTemp 
              dailySummary={dailyWeather.data?.[0].summary}
              currentTemp={currWeather.temperature}
              dayTempHigh={dailyWeather.data?.[0].temperatureHigh}
              dayTempLow={dailyWeather.data?.[0].temperatureLow}
            />
          </div>
        </div>
      </div>


      <div className="container">
        <Tabs />
      </div>
      
        
        
    </div>
  );
}

export default App;
