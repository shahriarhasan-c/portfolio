import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveResume from './InteractiveResume';

// Mock the resumeData
jest.mock('../../data/resumeData', () => ({
  workExperience: [
    {
      id: 1,
      position: 'Software Developer',
      company: 'Test Company',
      duration: '2022-2024',
      location: 'Test City',
      type: 'Full-time',
      description: 'Test job description',
      achievements: ['Achievement 1', 'Achievement 2'],
      technologies: ['React', 'JavaScript']
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'Test University',
      duration: '2018-2022',
      location: 'Test City',
      gpa: '3.8',
      description: 'Test education description',
      coursework: ['Data Structures', 'Algorithms'],
      achievements: ['Dean\'s List', 'Honor Roll']
    }
  ],
  skills: {
    technical: [
      {
        name: 'React',
        level: 90,
        category: 'Frontend'
      },
      {
        name: 'Node.js',
        level: 80,
        category: 'Backend'
      }
    ],
    soft: ['Communication', 'Leadership', 'Problem Solving']
  },
  certifications: [
    {
      id: 1,
      name: 'Test Certification',
      issuer: 'Test Issuer',
      date: '2024-01-15',
      credentialId: 'TEST123'
    }
  ]
}));

describe('InteractiveResume Component', () => {
  test('renders without crashing', () => {
    render(<InteractiveResume />);
    expect(screen.getByText('Interactive Resume')).toBeInTheDocument();
  });

  test('displays section title and description', () => {
    render(<InteractiveResume />);
    expect(screen.getByText('Interactive Resume')).toBeInTheDocument();
    expect(screen.getByText('Explore my professional journey and qualifications:')).toBeInTheDocument();
  });

  test('displays all tab buttons', () => {
    render(<InteractiveResume />);
    expect(screen.getByRole('button', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Certifications' })).toBeInTheDocument();
  });

  test('experience tab is active by default', () => {
    render(<InteractiveResume />);
    const experienceTab = screen.getByRole('button', { name: 'Experience' });
    expect(experienceTab).toHaveClass('active');
    
    // Should display experience content
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });

  test('clicking education tab displays education content', () => {
    render(<InteractiveResume />);
    const educationTab = screen.getByRole('button', { name: 'Education' });
    
    fireEvent.click(educationTab);
    
    expect(educationTab).toHaveClass('active');
    expect(screen.getByText('Bachelor of Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Test University')).toBeInTheDocument();
  });

  test('clicking skills tab displays skills content', () => {
    render(<InteractiveResume />);
    const skillsTab = screen.getByRole('button', { name: 'Skills' });
    
    fireEvent.click(skillsTab);
    
    expect(skillsTab).toHaveClass('active');
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Communication')).toBeInTheDocument();
  });

  test('clicking certifications tab displays certifications content', () => {
    render(<InteractiveResume />);
    const certificationsTab = screen.getByRole('button', { name: 'Certifications' });
    
    fireEvent.click(certificationsTab);
    
    expect(certificationsTab).toHaveClass('active');
    expect(screen.getByText('Test Certification')).toBeInTheDocument();
    expect(screen.getByText('Test Issuer')).toBeInTheDocument();
  });

  test('only one tab is active at a time', () => {
    render(<InteractiveResume />);
    const experienceTab = screen.getByRole('button', { name: 'Experience' });
    const educationTab = screen.getByRole('button', { name: 'Education' });
    const skillsTab = screen.getByRole('button', { name: 'Skills' });
    
    // Initially experience tab is active
    expect(experienceTab).toHaveClass('active');
    expect(educationTab).not.toHaveClass('active');
    expect(skillsTab).not.toHaveClass('active');
    
    // Click education tab
    fireEvent.click(educationTab);
    expect(experienceTab).not.toHaveClass('active');
    expect(educationTab).toHaveClass('active');
    expect(skillsTab).not.toHaveClass('active');
    
    // Click skills tab
    fireEvent.click(skillsTab);
    expect(experienceTab).not.toHaveClass('active');
    expect(educationTab).not.toHaveClass('active');
    expect(skillsTab).toHaveClass('active');
  });

  test('experience section shows expand/collapse functionality', () => {
    render(<InteractiveResume />);
    
    // Should see the expand button
    const expandButton = screen.getByText('+');
    expect(expandButton).toBeInTheDocument();
    
    // Initially, detailed content should not be visible
    expect(screen.queryByText('Test job description')).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(expandButton);
    
    // Now detailed content should be visible
    expect(screen.getByText('Test job description')).toBeInTheDocument();
    expect(screen.getByText('Achievement 1')).toBeInTheDocument();
  });

  test('education section shows expand/collapse functionality', () => {
    render(<InteractiveResume />);
    const educationTab = screen.getByRole('button', { name: 'Education' });
    
    fireEvent.click(educationTab);
    
    // Should see the expand button
    const expandButton = screen.getByText('+');
    expect(expandButton).toBeInTheDocument();
    
    // Initially, detailed content should not be visible
    expect(screen.queryByText('Test education description')).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(expandButton);
    
    // Now detailed content should be visible
    expect(screen.getByText('Test education description')).toBeInTheDocument();
    expect(screen.getByText('Data Structures')).toBeInTheDocument();
  });

  test('skills section shows filter functionality', () => {
    render(<InteractiveResume />);
    const skillsTab = screen.getByRole('button', { name: 'Skills' });
    
    fireEvent.click(skillsTab);
    
    // Should see filter buttons
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Backend' })).toBeInTheDocument();
    
    // All filter should be active by default
    expect(screen.getByRole('button', { name: 'All' })).toHaveClass('active');
  });
});