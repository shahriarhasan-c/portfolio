import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog from './Blog';

// Mock the blogPosts data
jest.mock('../../data/blogPosts', () => [
  {
    title: 'Test Blog Post 1',
    summary: 'This is a test summary for the first blog post.',
    date: '2024-01-15',
    slug: 'test-post-1',
    content: 'This is the full content of the first test blog post.\n\n## Heading\n\nSome more content here.'
  },
  {
    title: 'Test Blog Post 2',
    summary: 'This is a test summary for the second blog post.',
    date: '2024-01-10',
    slug: 'test-post-2',
    content: 'This is the full content of the second test blog post.\n\n### Subheading\n\nMore content.'
  }
]);

describe('Blog Component', () => {
  test('renders without crashing', () => {
    render(<Blog />);
    expect(screen.getByText('My Blog')).toBeInTheDocument();
  });

  test('displays section title and description', () => {
    render(<Blog />);
    expect(screen.getByText('My Blog')).toBeInTheDocument();
    expect(screen.getByText('Sharing insights and tutorials about web development:')).toBeInTheDocument();
  });

  test('displays blog post previews', () => {
    render(<Blog />);
    expect(screen.getByText('Test Blog Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Blog Post 2')).toBeInTheDocument();
    expect(screen.getByText('This is a test summary for the first blog post.')).toBeInTheDocument();
    expect(screen.getByText('This is a test summary for the second blog post.')).toBeInTheDocument();
  });

  test('displays read more buttons', () => {
    render(<Blog />);
    const readMoreButtons = screen.getAllByText('Read More');
    expect(readMoreButtons).toHaveLength(2);
  });

  test('opens modal when read more button is clicked', () => {
    render(<Blog />);
    const firstReadMoreButton = screen.getAllByText('Read More')[0];
    
    // Initially, modal should not be visible
    expect(screen.queryByText('This is the full content of the first test blog post.')).not.toBeInTheDocument();
    
    // Click the Read More button
    fireEvent.click(firstReadMoreButton);
    
    // Modal should now be visible with full content
    expect(screen.getByText('This is the full content of the first test blog post.')).toBeInTheDocument();
    expect(screen.getByText('Test Blog Post 1')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    render(<Blog />);
    const firstReadMoreButton = screen.getAllByText('Read More')[0];
    
    // Open the modal
    fireEvent.click(firstReadMoreButton);
    expect(screen.getByText('This is the full content of the first test blog post.')).toBeInTheDocument();
    
    // Click the close button
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    
    // Modal should be closed
    expect(screen.queryByText('This is the full content of the first test blog post.')).not.toBeInTheDocument();
  });


  test('does not close modal when modal content is clicked', () => {
    render(<Blog />);
    const firstReadMoreButton = screen.getAllByText('Read More')[0];
    
    // Open the modal
    fireEvent.click(firstReadMoreButton);
    expect(screen.getByText('This is the full content of the first test blog post.')).toBeInTheDocument();
    
    // Click the modal content (should not close)
    const modalContent = screen.getByText('This is the full content of the first test blog post.');
    fireEvent.click(modalContent);
    
    // Modal should still be open
    expect(screen.getByText('This is the full content of the first test blog post.')).toBeInTheDocument();
  });

  test('displays correct blog post in modal', () => {
    render(<Blog />);
    const readMoreButtons = screen.getAllByText('Read More');
    
    // Click the second Read More button
    fireEvent.click(readMoreButtons[1]);
    
    // Should display the second blog post content
    expect(screen.getByText('Test Blog Post 2')).toBeInTheDocument();
    expect(screen.getByText('This is the full content of the second test blog post.')).toBeInTheDocument();
  });
});