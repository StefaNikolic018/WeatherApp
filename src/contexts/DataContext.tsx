import React, { useState, createContext, useContext, useEffect } from 'react';
import { belgrade } from '../config/api';

import { IDataContext } from '../interfaces/contexts';
import { WeatherData } from '../interfaces/data';
import { IProps } from '../interfaces/standard';
import { getCoord, getWeather } from '../utils/fetchWeatherData';

const DataContext = createContext<IDataContext | null>({
  hasData: false,
  isFetching: false,
  data: [],
  fetchData: () => {
    return;
  },
});

export function useDataContext() {
  return useContext(DataContext);
}

export default function DataProvider({ children }: IProps) {
  const [hasData, setHasData] = useState(false);
  const [data, setData] = useState<object[] | undefined | WeatherData>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchData(belgrade);
  }, []);

  const fetchData = async (input: string) => {
    setIsFetching(true);
    const coord = await getCoord(input);
    const weather = await getWeather(coord[0], coord[1]);
    setData(weather);
    setIsFetching(false);
    if (data !== []) {
      setHasData(true);
    }
  };

  return (
    <DataContext.Provider value={{ hasData, isFetching, data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
}
