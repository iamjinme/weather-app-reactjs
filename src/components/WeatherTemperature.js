import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = weatherState => {
  let icon = "none";
  switch (weatherState) {
    case "cloud":
      icon = "cloud";
      break;
    default:
      icon = "sleet"
      break;
  }
  return (<WeatherIcons name={icon} size="2x" />)
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature}°C`}</span>
  </div>
);

export default WeatherTemperature;
