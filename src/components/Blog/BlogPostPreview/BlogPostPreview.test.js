import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogPostPreview from './BlogPostPreview';

describe('BlogPostPreview Component', () => {
  const mockProps = {
    title: 'Test Blog Post',
    summary: 'This is a test summary for the blog post.',
    date: '2024-01-15',
    slug: 'test-blog-post',
    onPostClick: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<BlogPostPreview {...mockProps} />);
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
  });

  test('displays blog post title', () => {
    render(<BlogPostPreview {...mockProps} />);
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
  });

  test('displays blog post date', () => {
    render(<BlogPostPreview {...mockProps} />);
    expect(screen.getByText('2024-01-15')).toBeInTheDocument();
  });

  test('displays blog post summary', () => {
    render(<BlogPostPreview {...mockProps} />);
    expect(screen.getByText('This is a test summary for the blog post.')).toBeInTheDocument();
  });

  test('displays read more button', () => {
    render(<BlogPostPreview {...mockProps} />);
    expect(screen.getByRole('button', { name: 'Read More' })).toBeInTheDocument();
  });

  test('calls onPostClick when read more button is clicked', () => {
    render(<BlogPostPreview {...mockProps} />);
    const readMoreButton = screen.getByRole('button', { name: 'Read More' });
    
    fireEvent.click(readMoreButton);
    
    expect(mockProps.onPostClick).toHaveBeenCalledTimes(1);
    expect(mockProps.onPostClick).toHaveBeenCalledWith('test-blog-post');
  });

  test('prevents default behavior when read more button is clicked', () => {
    render(<BlogPostPreview {...mockProps} />);
    const readMoreButton = screen.getByRole('button', { name: 'Read More' });
    
    const mockEvent = {
      preventDefault: jest.fn()
    };
    
    fireEvent.click(readMoreButton, mockEvent);
    
    expect(mockProps.onPostClick).toHaveBeenCalledWith('test-blog-post');
  });

  test('renders with all required props', () => {
    const minimalProps = {
      title: 'Minimal Post',
      summary: 'Minimal summary',
      date: '2024-01-01',
      slug: 'minimal-post',
      onPostClick: jest.fn()
    };
    
    render(<BlogPostPreview {...minimalProps} />);
    
    expect(screen.getByText('Minimal Post')).toBeInTheDocument();
    expect(screen.getByText('Minimal summary')).toBeInTheDocument();
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Read More' })).toBeInTheDocument();
  });

  test('has correct article structure', () => {
    render(<BlogPostPreview {...mockProps} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('blog-post-preview');
  });
});