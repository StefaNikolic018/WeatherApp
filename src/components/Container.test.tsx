import React from 'react';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import Container from './Container';

describe('Render test of Container component', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Container />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Correct conditional rendering', () => {
    const h = container.querySelector('h1')?.className;
    expect(h).toBe('message');
    expect(container.querySelector('.spinner')).not.toBeInTheDocument();
    expect(container.querySelector('.average')).not.toBeInTheDocument();
    expect(container.querySelector('.daily')).not.toBeInTheDocument();
    const dataWrapChildren =
      container.querySelector('.dataWrap')?.childElementCount;
    expect(dataWrapChildren).toEqual(1);
  });
});
