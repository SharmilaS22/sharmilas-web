import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders home, about and contact', () => {
  render(<Navbar />);  
  const menuItems = screen.getAllByRole('menuitem');
  expect(menuItems).toBeTruthy();
});