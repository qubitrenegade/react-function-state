import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('increments values by step', () => {
  expect(increment({ value: 0 }, { step: 5 })).toBe(5);
  expect(increment({ value: 0 })).toBe(1);
});

it('increments values by step by requiring App.js', () => {
  app = require('./App.js')
  expect(app.increment({ value: 0 }, { step: 5 })).toBe(5);
  expect(app.increment({ value: 0 })).toBe(1);
});

it('probabably shouldn\'t work by App.increment becaue it\'s not a function of the App class...', () => {
  expect(function(){App.increment({value: 0})}).toThrow();
});

it('decrements by step', () => {
  expect(decrement({ value: 0}, { step: 5 })).toBe(-5);
  expect(decrement({ value: 1})).toBe(0);
});

it('sets state to increment', () => {
  expect(App.handleIncrement()).toBe()
});
