import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('displays portfolio title and description', () => {
    render(<Footer />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText("Thank you for visiting my portfolio. Let's connect and create something amazing together!")).toBeInTheDocument();
  });

  test('displays quick links section', () => {
    render(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  test('displays all navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });

  test('displays connect section', () => {
    render(<Footer />);
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  test('displays social media links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email' })).toBeInTheDocument();
  });

  test('social media links have correct aria-label attributes', () => {
    render(<Footer />);
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  test('displays copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText('© 2024 Portfolio. All rights reserved.')).toBeInTheDocument();
  });

  test('has correct footer structure', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
  });

  test('renders all footer sections', () => {
    render(<Footer />);
    // Check that all three main sections are present
    expect(screen.getByText('Portfolio')).toBeInTheDocument(); // First section
    expect(screen.getByText('Quick Links')).toBeInTheDocument(); // Second section
    expect(screen.getByText('Connect')).toBeInTheDocument(); // Third section
  });

  test('social links have placeholder href attributes', () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole('link').filter(link => 
      ['LinkedIn', 'GitHub', 'Twitter', 'Email'].includes(link.getAttribute('aria-label'))
    );
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '#');
    });
  });
});