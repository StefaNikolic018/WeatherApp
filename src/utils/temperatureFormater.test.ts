import React from 'react';
import '@testing-library/jest-dom';
import {
  averageTemperature,
  dailyTemperature,
  degreeConvertor,
} from './temperatureFormater';
import { averageData, dailyData, tempData } from '../config/testData';

describe('Testing temperature formatter util functions', () => {
  //   const farenheit = degreeConvertor(12);
  const data = tempData;

  test('testing degree convertor', () => {
    expect(degreeConvertor(12)).toEqual(54);
  });
  test('Testing daily temperature', () => {
    expect(dailyTemperature(data)).toEqual(dailyData);
  });
  test('Testing average temperature', () => {
    expect(averageTemperature(data)).toEqual(averageData);
  });
});
