import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('displays portfolio title', () => {
    render(<Header />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  test('contains navigation component', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('has correct header structure', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header');
  });
});