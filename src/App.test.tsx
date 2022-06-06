import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders App Component', () => {
  it('sets a title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Monster Roledex/i);
    expect(linkElement).toBeInTheDocument();
  });
});
