import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header search input', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/search notes/i)).toBeInTheDocument();
});
