/* eslint-disable @typescript-eslint/no-explicit-any */
import { DailyData, WeatherData } from '../interfaces/data';
import { IDay } from '../interfaces/standard';

export const averageTemperature = (data: WeatherData | undefined | any) => {
  let average = 0;
  const days: string[] = [];

  const dailyArray = data?.daily.slice(1, 6);
  dailyArray?.forEach((day: DailyData) => {
    average += Math.round(day.temp.day);
    if (days.length) {
      days.push(
        new Date(day.dt * 1000).toLocaleDateString('en-US', {
          day: 'numeric',
        })
      );
    } else {
      days.push(
        new Date(day.dt * 1000).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
        })
      );
    }
  });
  average = average / 5;

  const results = [
    Math.round(average),
    days[0],
    days[4],
    new Date().getFullYear(),
  ];

  return results;
};

export const dailyTemperature = (data: WeatherData | undefined | any) => {
  const days: IDay[] = [];

  const dailyArray = data.daily.slice(1, 8);
  dailyArray.forEach((d: DailyData) => {
    const day: IDay = { day: '', temp: 0 };
    const date = new Date(d.dt * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
    });
    day.day = date;
    day.temp = Math.round(d.temp.day);
    days.push(day);
  });

  return days;
};
