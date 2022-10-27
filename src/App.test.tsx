import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from './App';

const makeSut = () => {
  return render(<App />);
};
let screen: RenderResult;

beforeEach(() => {
    screen = makeSut();
});

describe('<App />', () => {
  test('Should render ul', () => {
    expect(screen.container.querySelector('ul')).toBeInTheDocument();
  });

  test('Should render data', () => {
    expect(screen.container.querySelectorAll('li').length).toBe(21);
  });
});
