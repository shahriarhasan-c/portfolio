import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectList from './ProjectList';

describe('ProjectList Component', () => {
  test('renders without crashing', () => {
    render(<ProjectList />);
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });

  test('displays section title and description', () => {
    render(<ProjectList />);
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    expect(screen.getByText("Here are some of the projects I've worked on:")).toBeInTheDocument();
  });

  test('displays sample projects', () => {
    render(<ProjectList />);
    expect(screen.getByText('Sample Project 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Project 2')).toBeInTheDocument();
  });

  test('displays project descriptions', () => {
    render(<ProjectList />);
    expect(screen.getByText('Description of the first project will go here.')).toBeInTheDocument();
    expect(screen.getByText('Description of the second project will go here.')).toBeInTheDocument();
  });

  test('displays technology tags', () => {
    render(<ProjectList />);
    // Check for technologies from the first project
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    
    // Check for technologies from the second project
    expect(screen.getByText('HTML')).toBeInTheDocument();
  });

  test('renders correct number of project cards', () => {
    render(<ProjectList />);
    // Should render 2 sample projects
    const projectTitles = screen.getAllByText(/Sample Project \d/);
    expect(projectTitles).toHaveLength(2);
  });
});