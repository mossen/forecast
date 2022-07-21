import { render, screen } from '@testing-library/react';

import App from './App';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search a city/i);
  expect(linkElement).toBeInTheDocument();
});
