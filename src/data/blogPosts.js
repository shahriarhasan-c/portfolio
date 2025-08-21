const blogPosts = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    summary: "A comprehensive guide to starting your journey with React development.",
    date: "2024-01-15",
    content: `# Getting Started with React

React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React and how to get started with your first React application.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components."

## Key Concepts

### Components
Components are the building blocks of React applications. They can be function components or class components.

### JSX
JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It describes what the UI should look like.

### Props
Props are how components talk to each other. They are read-only data passed from parent to child components.

### State
State is a way to store and manage data that can change over time within a component.

## Getting Started

To create a new React application, you can use Create React App:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

This will set up a new React project with all the necessary dependencies and a development server.

## Conclusion

React is an excellent choice for building modern web applications. Its component-based architecture makes it easy to build and maintain large applications.`
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques",
    summary: "Exploring the latest CSS features and best practices for modern web development.",
    date: "2024-01-10",
    content: `# Modern CSS Techniques

CSS has evolved significantly over the years. In this article, we'll explore some of the most powerful modern CSS techniques that can help you create stunning and responsive designs.

## CSS Grid

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with ease:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
\`\`\`

## Flexbox

Flexbox is perfect for one-dimensional layouts and aligning items:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Variables

CSS custom properties make it easy to maintain consistent themes:

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

## Container Queries

Container queries allow you to style elements based on their container's size:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

## Conclusion

These modern CSS techniques provide powerful tools for creating responsive, maintainable, and visually appealing web designs.`
  },
  {
    slug: "javascript-es6-features",
    title: "JavaScript ES6+ Features",
    summary: "Understanding the essential ES6+ features that every JavaScript developer should know.",
    date: "2024-01-05",
    content: `# JavaScript ES6+ Features

ES6 (ECMAScript 2015) and later versions introduced many powerful features that have transformed JavaScript development. Let's explore the most important ones.

## Arrow Functions

Arrow functions provide a more concise syntax for writing functions:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Template Literals

Template literals make string interpolation much easier:

\`\`\`javascript
const name = 'John';
const age = 30;
const message = \`Hello, my name is \${name} and I'm \${age} years old.\`;
\`\`\`

## Destructuring

Destructuring allows you to extract values from arrays and objects:

\`\`\`javascript
// Array destructuring
const [first, second] = [1, 2, 3];

// Object destructuring
const {name, age} = {name: 'John', age: 30, city: 'New York'};
\`\`\`

## Spread Operator

The spread operator provides a convenient way to expand arrays and objects:

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3}; // {a: 1, b: 2, c: 3}
\`\`\`

## Promises and Async/Await

Modern JavaScript provides better ways to handle asynchronous operations:

\`\`\`javascript
// Promise
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

// Async/Await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Conclusion

These ES6+ features have made JavaScript more powerful and developer-friendly. Mastering them is essential for modern web development.`
  },
  {
    slug: "responsive-web-design-best-practices",
    title: "Responsive Web Design Best Practices",
    summary: "Learn the essential principles and techniques for creating responsive websites that work on all devices.",
    date: "2023-12-28",
    content: `# Responsive Web Design Best Practices

Responsive web design ensures that your website looks and functions great on all devices, from mobile phones to desktop computers. Here are the essential best practices to follow.

## Mobile-First Approach

Start designing for mobile devices first, then progressively enhance for larger screens:

\`\`\`css
/* Mobile styles (default) */
.container {
  padding: 10px;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    padding: 30px;
  }
}
\`\`\`

## Flexible Grid Systems

Use flexible grids that adapt to different screen sizes:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

## Fluid Images

Make images responsive by default:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

## Viewport Meta Tag

Always include the viewport meta tag in your HTML:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Touch-Friendly Design

Ensure interactive elements are large enough for touch interaction:

\`\`\`css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 20px;
}
\`\`\`

## Performance Optimization

Optimize images and use appropriate formats for different devices:

\`\`\`html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>
\`\`\`

## Conclusion

Following these responsive design best practices will help you create websites that provide an excellent user experience across all devices and screen sizes.`
  }
];

export default blogPosts;