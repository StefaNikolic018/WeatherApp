/* eslint-disable no-case-declarations */
import React from 'react';
import { useBackgroundContext } from '../contexts/BackgroundContext';
import { useDataContext } from '../contexts/DataContext';
import {
  averageTemperature,
  dailyTemperature,
} from '../utils/temperatureFormater';

interface IProps {
  type: 'average' | 'daily';
}

export default function Temperature({ type }: IProps) {
  const weather = useDataContext();
  const bg = useBackgroundContext();

  const renderTemperature = () => {
    switch (type) {
      case 'average':
        const averageData = averageTemperature(weather?.data);
        setTimeout(() => {
          bg?.changeBackground(parseInt(averageData[0].toString()));
        }, 50);
        return (
          <div key={averageData[1]} className="average">
            <p>
              {averageData[1]} - {averageData[2]} {averageData[3]}
            </p>
            <h1>
              {weather?.isCelsius
                ? averageData[0]
                : Math.round(Number(averageData[0]) * (9 / 5) + 32)}
              <span>&deg;{weather?.isCelsius ? 'C' : 'F'}</span>
            </h1>
          </div>
        );
      default:
        const dailyTemperatures = dailyTemperature(weather?.data);
        const arrOfElements: React.ReactFragment[] = [];
        dailyTemperatures.forEach((d) => {
          arrOfElements.push(
            <div key={d.day + d.temp}>
              <p>{d.day}</p>
              <h1>
                <img
                  src={`http://openweathermap.org/img/wn/${d.icon}@2x.png`}
                  alt="Weather Icon"
                />
                {weather?.isCelsius
                  ? d.temp
                  : Math.round(Number(d.temp) * (9 / 5) + 32)}
                <span>&deg;{weather?.isCelsius ? 'C' : 'F'}</span>
              </h1>
            </div>
          );
        });
        return <div className="daily">{arrOfElements}</div>;
    }
  };

  return weather?.hasData ? renderTemperature() : <></>;
}
