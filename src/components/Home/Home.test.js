import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
  });

  test('displays main welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
    expect(screen.getByText("I'm a passionate developer creating amazing digital experiences.")).toBeInTheDocument();
  });

  test('displays about me section', () => {
    render(<Home />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/I'm a full-stack developer with a passion for creating beautiful/)).toBeInTheDocument();
  });

  test('displays call-to-action buttons', () => {
    render(<Home />);
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  test('has correct navigation links', () => {
    render(<Home />);
    const workLink = screen.getByRole('link', { name: 'View My Work' });
    const contactLink = screen.getByRole('link', { name: 'Get In Touch' });
    
    expect(workLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

});