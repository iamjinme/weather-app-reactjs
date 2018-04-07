import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = () => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={18} weatherState={'windy'}/>
    <WeatherExtraInfo humidity={80} wind={'10m/s'} />
  </div>
);

export default WeatherData;