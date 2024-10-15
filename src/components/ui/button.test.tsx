import { render, screen } from '@testing-library/react';
import { Button } from './button';

test('renders a button with text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});
