import React, {useState, useEffect} from 'react';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentLocationData from './components/CurrentLocationData/CurrentLocationData';
import usePosition from './utils/usePositionHook';
import {GeoLocationAPIResponse, WeatherAPIResponse} from './utils/Interfaces'

import { get } from './utils/Axios';

const App = () => {

  const {latitude, longitude, error}: any = usePosition();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");


  const [currWeather, setCurrWeather] = useState({});

  const [dailyWeather, setDailyWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState({});


  const getLocation = async () => {
    const locationData = await get<GeoLocationAPIResponse>('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3/');
    setCity(locationData.city);
    setCountry(locationData.country_name);
  }

  const getWeather = async () => {
    const weatherData = await get<WeatherAPIResponse>(`https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${latitude},${longitude}`);
    console.log(weatherData);

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
      <CurrentLocationData city={city} country={country} status='status' />
    </div>
  );
}

export default App;
