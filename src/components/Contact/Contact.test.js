import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  test('displays section title and description', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
    expect(screen.getByText('Get in touch for opportunities or collaborations:')).toBeInTheDocument();
  });

  test('displays contact form', () => {
    render(<Contact />);
    expect(screen.getByText('Send a Message')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('displays all form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  test('displays submit button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  test('form fields have correct attributes', () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageTextarea = screen.getByLabelText('Message');
    
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('id', 'name');
    expect(nameInput).toHaveAttribute('name', 'name');
    expect(nameInput).toBeRequired();
    
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(emailInput).toBeRequired();
    
    expect(messageTextarea).toHaveAttribute('id', 'message');
    expect(messageTextarea).toHaveAttribute('name', 'message');
    expect(messageTextarea).toHaveAttribute('rows', '5');
    expect(messageTextarea).toBeRequired();
  });

  test('allows typing in name field', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Name');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    
    expect(nameInput).toHaveValue('John Doe');
  });

  test('allows typing in email field', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Email');
    
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    
    expect(emailInput).toHaveValue('john@example.com');
  });

  test('allows typing in message field', () => {
    render(<Contact />);
    const messageTextarea = screen.getByLabelText('Message');
    
    fireEvent.change(messageTextarea, { target: { value: 'Hello, this is a test message.' } });
    
    expect(messageTextarea).toHaveValue('Hello, this is a test message.');
  });

  test('can fill out complete form', () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageTextarea = screen.getByLabelText('Message');
    
    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'I would like to discuss a project with you.' } });
    
    expect(nameInput).toHaveValue('Jane Smith');
    expect(emailInput).toHaveValue('jane@example.com');
    expect(messageTextarea).toHaveValue('I would like to discuss a project with you.');
  });

  test('submit button is clickable', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    
    expect(submitButton).toHaveAttribute('type', 'submit');
    
    // Should be able to click without errors
    fireEvent.click(submitButton);
  });

  test('displays contact information section', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
  });

  test('displays contact details', () => {
    render(<Contact />);
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('your.email@example.com')).toBeInTheDocument();
    expect(screen.getByText('Phone:')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByText('Your City, Country')).toBeInTheDocument();
  });


  test('labels are properly associated with inputs', () => {
    render(<Contact />);
    
    const nameLabel = screen.getByText('Name');
    const emailLabel = screen.getByText('Email');
    const messageLabel = screen.getByText('Message');
    
    expect(nameLabel).toHaveAttribute('for', 'name');
    expect(emailLabel).toHaveAttribute('for', 'email');
    expect(messageLabel).toHaveAttribute('for', 'message');
  });
});