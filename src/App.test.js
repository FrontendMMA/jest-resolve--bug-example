import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DESKTOP', () => {
  render(<App />);
  // window.innerWidth = 1024
  const linkElement = screen.getByText(/DESKTOP/i);
  expect(linkElement).toBeInTheDocument();
});
