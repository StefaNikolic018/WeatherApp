import React from 'react';
import '@testing-library/jest-dom';
import { getCoord, getWeather } from './fetchWeatherData';
import { coordData } from '../config/testData';

describe('Testing weather data fetching', () => {
  it('Results for geolocation', async () => {
    const input = 'Novi sad,rs';
    const data = await getCoord(input);
    expect(data).toEqual(coordData);
  });
  it('If we mispell some word in geolocation', async () => {
    const input = 'Novi ssad,rs';
    const data = await getCoord(input);
    expect(data).toEqual([]);
  });
  it('Results by lat and lon ', async () => {
    const data = await getWeather(
      coordData[0].toString(),
      coordData[1].toString()
    );
    expect(data.timezone).toEqual('Europe/Belgrade');
  });
});
