
import { BlogPost } from '../types';

export const post4: BlogPost = {
  id: 4,
  title: "Accessibility in Web Design",
  excerpt: "Why accessibility matters and how to implement it in your web projects.",
  content: `
# Accessibility in Web Design

Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. It's not just a nice-to-have feature—it's essential for creating inclusive digital experiences.

## Why Accessibility Matters

- **Inclusivity**: Everyone should have equal access to information and functionality.
- **Legal Requirements**: Many countries have laws requiring accessible websites.
- **SEO Benefits**: Many accessibility practices also improve search engine optimization.
- **Larger Audience**: About 15% of the global population lives with some form of disability.

## Key Accessibility Guidelines (WCAG)

The Web Content Accessibility Guidelines (WCAG) are organized around four principles:

### 1. Perceivable

Content must be presentable to users in ways they can perceive:

- Provide text alternatives for non-text content
- Provide captions for videos
- Create content that can be presented in different ways
- Make it easier for users to see and hear content

### 2. Operable

Interface components and navigation must be operable:

- Make all functionality available from a keyboard
- Give users enough time to read and use content
- Don't use content that causes seizures
- Provide ways to help users navigate and find content

### 3. Understandable

Information and operation of the interface must be understandable:

- Make text readable and understandable
- Make content appear and operate in predictable ways
- Help users avoid and correct mistakes

### 4. Robust

Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies:

- Maximize compatibility with current and future user tools

## Practical Implementation Tips

### Semantic HTML

Use proper HTML elements for their intended purpose:

\`\`\`html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
\`\`\`

### Keyboard Navigation

Ensure all interactive elements can be accessed and operated via keyboard:

\`\`\`css
/* Make focus visible */
:focus {
  outline: 2px solid #4299e1;
}
\`\`\`

### Color Contrast

Ensure sufficient contrast between text and background:

\`\`\`css
/* Good contrast */
body {
  color: #333;
  background-color: #fff;
}
\`\`\`

### Alternative Text

Provide alternative text for images:

\`\`\`html
<img src="graph.png" alt="Bar graph showing sales increase of 25% in Q1 2025">
\`\`\`

### ARIA Attributes

Use ARIA attributes when necessary:

\`\`\`html
<div role="alert" aria-live="assertive">
  Form submitted successfully!
</div>
\`\`\`

## Testing Accessibility

- Use automated tools like Axe, WAVE, or Lighthouse
- Test with keyboard navigation
- Test with screen readers
- Conduct usability testing with people with disabilities

Remember, accessibility is a journey, not a destination. Start implementing these practices today, and continually work to improve the accessibility of your web projects.
  `,
  author: "Sophia Rodriguez",
  date: "2025-04-10",
  readTime: "7 min",
  category: "Web Design",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&auto=format&fit=crop",
  featured: false
};
