import { WeatherData } from './data';

export type IBackgroundContext = {
  backgroundColor: string | undefined;
  changeBackground: (degree: number) => void;
};

export type IDataContext = {
  isCelsius: boolean;
  changeIsCelsius: () => void;
  message: string | Array<string>;
  hasData: boolean;
  isFetching: boolean;
  data: object[] | undefined | WeatherData;
  fetchData: (city: string) => void;
};
