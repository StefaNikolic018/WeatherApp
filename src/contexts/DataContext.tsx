import React, { useState, createContext, useContext } from 'react';

import { IDataContext } from '../interfaces/contexts';
import { WeatherData } from '../interfaces/data';
import { IProps } from '../interfaces/standard';
import { getCoord, getWeather } from '../utils/fetchWeatherData';
// import { belgrade } from '../config/api';

const DataContext = createContext<IDataContext | null>({
  isCelsius: true,
  changeIsCelsius: () => {
    return;
  },
  message: 'No data to show.',
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
  const [message, setMessage] = useState<string | Array<string>>(
    'No data to show.'
  );
  const [isCelsius, setIsCelsius] = useState(true);
  // useEffect(() => {
  //   fetchData(belgrade);
  // }, []);

  const fetchData = async (input: string) => {
    setIsFetching(true);
    const coord = await getCoord(input);
    if (coord.length) {
      const weather = await getWeather(coord[0], coord[1]);
      setData(weather);
      setIsFetching(false);
      setHasData(true);
    } else {
      const inputArr = input.split(',');
      setHasData(false);
      setIsFetching(false);
      setMessage([inputArr[0], inputArr[1]]);
      setData([]);
    }
  };

  const changeIsCelsius = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <DataContext.Provider
      value={{
        isCelsius,
        changeIsCelsius,
        message,
        hasData,
        isFetching,
        data,
        fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
