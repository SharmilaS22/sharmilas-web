import { render, screen } from '@testing-library/react';
import NameAndTitle from './NameAndTitle';


test('renders Name and Title', () => {
  render(<NameAndTitle />);  
  const name = screen.getByText('Sharmila S');
  const title_1 = screen.getByText('Software Engineer');
  const title_2 = screen.getByText('Blogger');

  expect(name).toBeTruthy();
  expect(title_1).toBeTruthy();
  expect(title_2).toBeTruthy();
});