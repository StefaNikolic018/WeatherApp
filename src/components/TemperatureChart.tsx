import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDataContext } from '../contexts/DataContext';
import { IDay } from '../interfaces/standard';
import {
  dailyTemperature,
  degreeConvertor,
} from '../utils/temperatureFormater';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TemperatureChart = () => {
  const weather = useDataContext();

  const [dailyTemps, setDailyTemps] = useState<IDay[] | undefined>(
    dailyTemperature(weather?.data)
  );

  useEffect(() => {
    if (!weather?.isCelsius) {
      const farenheitArr = dailyTemps?.map((day) => {
        return {
          day: day.day,
          temp: degreeConvertor(day.temp),
          icon: day.icon,
        };
      });
      setDailyTemps(farenheitArr);
    } else {
      setDailyTemps(dailyTemperature(weather?.data));
    }
  }, [weather?.isCelsius]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Chart',
      },
    },
  };

  const labels = dailyTemps?.map((day) => day.day)!;

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: dailyTemps?.map((day) => day.temp),
        borderColor: 'rgba(172, 57, 155, 1)',
        backgroundColor: 'rgba(98, 57, 172, 0.44)',
        pointRadius: 5,
        pointHoverRadius: 10
      },
    ],
  };
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
}
