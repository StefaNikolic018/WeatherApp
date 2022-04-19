import axios from 'axios';
import { coordUrl, weatherUrl } from '../config/api';

export const getCoord = async (input: string) => {
  try {
    const coord = await axios.get(coordUrl(input)).then((res) => {
      return res.data;
    }).catch((e) => console.log(e.message));
    return coord.length ? [coord[0].lat, coord[0].lon] : [];
  } catch (e) {
    return [];
  }
};

export const getWeather = async (lat: string, lon: string) => {
  try {
    const weather = await axios.get(weatherUrl(lat, lon)).then((res) => {
      return res.data;
    }).catch((e) => console.log(e.message));;
    return weather;
  } catch (e) {
    console.log(e);
  }
};
