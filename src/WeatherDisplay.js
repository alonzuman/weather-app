import React from 'react';
import './WeatherDisplay.css';

export default function WeatherDisplay({ data }) {
  console.log(data);

  return (
    <div className='weather-display-container'>
      <div className='column'>
        <h2>{data.name}, {data.sys.country}</h2>
        <div>
          <h1><i className="fas fa-cloud"></i> {Number((parseInt(data.main.temp) - 273.15).toFixed(0))} °C</h1>
        </div>
      </div>
      <div className='column right'>
        <div className='description'>{`${Date(Date.now()).split(' ')[4].split(':')[0]}:${Date(Date.now()).split(' ')[4].split(':')[1]}`}</div>
        <div className='description'>{data.weather[0].main}</div>
        <div className='description'>Humidity: {data.main.humidity}%</div>
        <div className='description'>Wind: {Number((data.wind.speed * 1.60934).toFixed(0))}km/h</div>
      </div>
    </div>
  )
}
