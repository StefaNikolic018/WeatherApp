import axios from 'axios';
import { coordUrl, weatherUrl } from '../config/api';

export const getCoord = async (input: string) => {
  const coord = await axios.get(coordUrl(input)).then((res) => {
    return res.data;
  });
  return coord.length ? [coord[0].lat, coord[0].lon] : [];
};

export const getWeather = async (lat: string, lon: string) => {
  const weather = await axios.get(weatherUrl(lat, lon)).then((res) => {
    return res.data;
  });
  return weather;
};
