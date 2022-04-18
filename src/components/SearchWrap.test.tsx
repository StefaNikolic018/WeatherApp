import React from 'react';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import SearchWrap from './SearchWrap';

describe('Render testing of SearchWrap child components', () => {
  let searchWrap: HTMLDivElement;

  beforeEach(() => {
    searchWrap = document.createElement('div');
    document.body.appendChild(searchWrap);
    ReactDOM.render(<SearchWrap />, searchWrap);
  });

  afterEach(() => {
    document.body.removeChild(searchWrap);
    searchWrap.remove();
  });

  it('Correct rendering of input elements', () => {
    expect(searchWrap.querySelector('[name="search"]')).toBeInTheDocument();
    expect(
      searchWrap.querySelector('[name="search"]')?.getAttribute('value')
    ).toBe('Belgrade');
    expect(
      searchWrap.querySelector('[name="countryDropdown"]')
    ).toBeInTheDocument();
    expect(
      searchWrap.querySelector('[name="degreeSwitch"]')
    ).toBeInTheDocument();
  });
});
