import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import '@testing-library/jest-dom';


describe('Testing for message component', () => {
  const emptyFirstArrayElement = [''];
  const standardArray = ['Niss', 'rs'];
  const stringMessage = 'Component working properly!';

  let message: HTMLDivElement;

  afterEach(() => {
    document.body.removeChild(message);
    message.remove();
  });

  it('Testing component with empty string in array', () => {
    message = document.createElement('div');
    document.body.appendChild(message);
    ReactDOM.render(<Message message={emptyFirstArrayElement} />, message);
    const h = document.getElementById('mess');
    expect(h).toBeInTheDocument();
  });

  it('Testing component with standard array', () => {
    message = document.createElement('div');
    document.body.appendChild(message);
    ReactDOM.render(<Message message={standardArray} />, message);
    const h = document.getElementById('mispell');
    expect(h).toBeInTheDocument();
  });

  it('Testing component with standard string', () => {
    message = document.createElement('div');
    document.body.appendChild(message);
    ReactDOM.render(<Message message={stringMessage} />, message);
    const h = document.getElementById('no-data');
    expect(h).toBeInTheDocument();
  });
});