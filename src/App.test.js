import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text Eric Giron', () => {
  render(<App />)
  const nameElement = screen.getByText(/Eric Giron/i)
  expect(nameElement).toBeInTheDocument()
});

