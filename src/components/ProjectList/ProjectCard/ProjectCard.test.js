import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from './ProjectCard';

describe('ProjectCard Component', () => {
  const mockProps = {
    title: 'Test Project',
    description: 'This is a test project description',
    imageUrl: 'https://example.com/image.jpg',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://example.com/live',
    sourceUrl: 'https://github.com/example/repo'
  };

  test('renders without crashing', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  test('displays project title and description', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  test('displays technologies', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  test('displays project image when imageUrl is provided', () => {
    render(<ProjectCard {...mockProps} />);
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('displays live demo link when liveUrl is provided', () => {
    render(<ProjectCard {...mockProps} />);
    const liveLink = screen.getByRole('link', { name: 'Live Demo' });
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute('href', 'https://example.com/live');
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('displays source code link when sourceUrl is provided', () => {
    render(<ProjectCard {...mockProps} />);
    const sourceLink = screen.getByRole('link', { name: 'Source Code' });
    expect(sourceLink).toBeInTheDocument();
    expect(sourceLink).toHaveAttribute('href', 'https://github.com/example/repo');
    expect(sourceLink).toHaveAttribute('target', '_blank');
    expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('does not display image when imageUrl is not provided', () => {
    const propsWithoutImage = { ...mockProps, imageUrl: null };
    render(<ProjectCard {...propsWithoutImage} />);
    expect(screen.queryByAltText('Test Project')).not.toBeInTheDocument();
  });

  test('does not display live demo link when liveUrl is not provided', () => {
    const propsWithoutLiveUrl = { ...mockProps, liveUrl: null };
    render(<ProjectCard {...propsWithoutLiveUrl} />);
    expect(screen.queryByRole('link', { name: 'Live Demo' })).not.toBeInTheDocument();
  });

  test('does not display source code link when sourceUrl is not provided', () => {
    const propsWithoutSourceUrl = { ...mockProps, sourceUrl: null };
    render(<ProjectCard {...propsWithoutSourceUrl} />);
    expect(screen.queryByRole('link', { name: 'Source Code' })).not.toBeInTheDocument();
  });

  test('handles empty technologies array', () => {
    const propsWithoutTech = { ...mockProps, technologies: [] };
    render(<ProjectCard {...propsWithoutTech} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    // Should still render without errors
  });

  test('handles undefined technologies', () => {
    const propsWithoutTech = { ...mockProps, technologies: undefined };
    render(<ProjectCard {...propsWithoutTech} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    // Should still render without errors
  });
});