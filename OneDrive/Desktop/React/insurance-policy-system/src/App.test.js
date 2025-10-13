import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to insurance policy system!/i);
  expect(welcomeElement).toBeInTheDocument();
});
