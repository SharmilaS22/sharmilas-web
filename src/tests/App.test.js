import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Name', () => {
  render(<App />);
  const nameElement = screen.getByText('Sharmila S');
  expect(nameElement).toBeTruthy();
});
