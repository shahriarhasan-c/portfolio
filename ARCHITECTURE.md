# Portfolio Application Architecture

This document outlines the architecture, features, and technology stack for the modern portfolio application.

## 1. Core & Advanced Features

### Core Features
- **Home/About:** A landing page with a brief introduction, a professional photo, and a summary of skills and experience.
- **Projects:** A section to showcase key projects, including descriptions, technologies used, and links to live demos or source code.
- **Skills:** A dedicated area to list technical skills, tools, and technologies.
- **Contact:** A simple form or contact information for potential employers or collaborators.

### Advanced Features
- **Blog:** A personal blog to write about technical topics and share insights.
- **Interactive Resume:** A dynamic and filterable resume to explore work experience and skills.

## 2. Component-Based Architecture

The UI is broken down into a hierarchy of reusable components.

### Component Hierarchy
```
App
├── Header
│   └── Navigation
├── Main
│   ├── Home
│   ├── ProjectList
│   │   └── ProjectCard
│   ├── Skills
│   ├── Contact
│   ├── Blog
│   │   └── BlogPostPreview
│   └── InteractiveResume
└── Footer
```

### Component Props

- **`ProjectCard`**
  - `title`: string
  - `description`: string
  - `imageUrl`: string
  - `technologies`: array of strings
  - `liveUrl`: string
  - `sourceUrl`: string

- **`BlogPostPreview`**
  - `title`: string
  - `summary`: string
  - `date`: string
  - `slug`: string (for linking to the full post)

## 3. Technology Stack Recommendation

- **Framework:** React
- **Styling:** Tailwind CSS