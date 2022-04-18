import React from 'react';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import Temperature from './Temperature';

describe('Render test of Temperature component', () => {
  let temperature: HTMLDivElement;

  afterEach(() => {
    document.body.removeChild(temperature);
    temperature.remove();
  });

  it('Testing if there will be rendering without data', () => {
    temperature = document.createElement('div');
    document.body.appendChild(temperature);
    ReactDOM.render(
      [
        <Temperature key="average" type="average" />,
        <Temperature key="daily" type="daily" />,
      ],
      temperature
    );
    expect(temperature.querySelector('div')).not.toBeInTheDocument();
  });
});
