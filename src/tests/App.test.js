import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


test('renders soccer app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/English Premier League Soccer Teams/i);
  expect(linkElement).toBeInTheDocument();
});
