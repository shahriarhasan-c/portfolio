import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  test('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('displays all navigation links', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '#resume');
  });

  test('displays mobile menu toggle button', () => {
    render(<Navigation />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass('mobile-menu-toggle');
  });

  test('mobile menu toggle button has correct aria-label', () => {
    render(<Navigation />);
    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    expect(toggleButton).toBeInTheDocument();
  });

  test('mobile menu is initially closed', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('mobile-open');
    
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    expect(toggleButton).not.toHaveClass('active');
  });

  test('clicking mobile toggle opens mobile menu', () => {
    render(<Navigation />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    const nav = screen.getByRole('navigation');
    
    fireEvent.click(toggleButton);
    
    expect(nav).toHaveClass('mobile-open');
    expect(toggleButton).toHaveClass('active');
  });

  test('clicking mobile toggle twice opens and closes mobile menu', () => {
    render(<Navigation />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    const nav = screen.getByRole('navigation');
    
    // First click - open
    fireEvent.click(toggleButton);
    expect(nav).toHaveClass('mobile-open');
    expect(toggleButton).toHaveClass('active');
    
    // Second click - close
    fireEvent.click(toggleButton);
    expect(nav).not.toHaveClass('mobile-open');
    expect(toggleButton).not.toHaveClass('active');
  });

  test('clicking navigation links closes mobile menu', () => {
    render(<Navigation />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    const nav = screen.getByRole('navigation');
    
    // Open mobile menu
    fireEvent.click(toggleButton);
    expect(nav).toHaveClass('mobile-open');
    
    // Click a navigation link
    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);
    
    // Mobile menu should be closed
    expect(nav).not.toHaveClass('mobile-open');
    expect(toggleButton).not.toHaveClass('active');
  });

  test('all navigation links close mobile menu when clicked', () => {
    render(<Navigation />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    const nav = screen.getByRole('navigation');
    
    const links = [
      screen.getByRole('link', { name: 'Home' }),
      screen.getByRole('link', { name: 'Projects' }),
      screen.getByRole('link', { name: 'Skills' }),
      screen.getByRole('link', { name: 'Contact' }),
      screen.getByRole('link', { name: 'Blog' }),
      screen.getByRole('link', { name: 'Resume' })
    ];
    
    links.forEach(link => {
      // Open mobile menu
      fireEvent.click(toggleButton);
      expect(nav).toHaveClass('mobile-open');
      
      // Click the link
      fireEvent.click(link);
      
      // Mobile menu should be closed
      expect(nav).not.toHaveClass('mobile-open');
    });
  });


  test('navigation has correct CSS class', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('navigation');
  });
});