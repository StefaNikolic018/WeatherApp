// export type IBackgroundContext = {
//     color: string;
//     changeBackground: (firstColor: number[], secondColor: number[]) => void;

import { WeatherData } from './data';

// }
export type IBackgroundContext = {
  backgroundColor: string | undefined;
  changeBackground: (degree: number) => void;
};

export type IDataContext = {
  hasData: boolean;
  isFetching: boolean;
  data: object[] | undefined | WeatherData;
  fetchData: (city: string) => void;
};
