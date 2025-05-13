
import { BlogPost } from '../types';

export const post2: BlogPost = {
  id: 2,
  title: "Modern CSS Techniques",
  excerpt: "Explore the latest CSS features that are revolutionizing web design in 2025.",
  content: `
# Modern CSS Techniques for 2025

CSS has come a long way from simply styling text and backgrounds. Today's CSS is powerful and can handle complex layouts and animations that previously required JavaScript.

## CSS Grid

CSS Grid has revolutionized web layouts. It allows for two-dimensional layouts with rows and columns, making it perfect for overall page structure.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS Custom Properties (Variables)

Custom properties make your CSS more maintainable and dynamic:

\`\`\`css
:root {
  --primary-color: #3498db;
}

button {
  background-color: var(--primary-color);
}
\`\`\`

## Flexbox for Component Layout

While Grid is great for page layout, Flexbox excels at component-level layouts:

\`\`\`css
.card {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Container Queries

Container queries allow you to style elements based on their parent's size, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
\`\`\`

## CSS Animations and Transitions

Create smooth animations without JavaScript:

\`\`\`css
.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: translateY(-3px);
}
\`\`\`

## CSS Logical Properties

Write more maintainable code for international websites:

\`\`\`css
.element {
  margin-inline: 1rem; /* horizontal margins */
  margin-block: 2rem;  /* vertical margins */
}
\`\`\`

## CSS Subgrid

Subgrid allows nested grid items to align with the parent grid:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

By mastering these modern CSS techniques, you'll create more efficient, maintainable, and visually appealing websites.
  `,
  author: "Alex Johnson",
  date: "2025-04-25",
  readTime: "4 min",
  category: "CSS",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
  featured: false
};
