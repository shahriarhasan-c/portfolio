import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from './Skills';

describe('Skills Component', () => {
  test('renders without crashing', () => {
    render(<Skills />);
    expect(screen.getByText('My Skills')).toBeInTheDocument();
  });

  test('displays section title and description', () => {
    render(<Skills />);
    expect(screen.getByText('My Skills')).toBeInTheDocument();
    expect(screen.getByText('Technologies and tools I work with:')).toBeInTheDocument();
  });

  test('displays skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });

  test('displays frontend skills', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  test('displays backend skills', () => {
    render(<Skills />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Express')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('SQL')).toBeInTheDocument();
  });

  test('displays tools', () => {
    render(<Skills />);
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('VS Code')).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText('npm')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  test('renders correct number of skill categories', () => {
    render(<Skills />);
    const categories = screen.getAllByText(/Frontend|Backend|Tools/);
    expect(categories).toHaveLength(3);
  });
});