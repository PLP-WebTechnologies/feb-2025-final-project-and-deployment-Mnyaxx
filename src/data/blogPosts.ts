
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "A comprehensive guide for beginners looking to start their journey in web development.",
    content: `
# Getting Started with Web Development

Web development can seem overwhelming at first, but with the right approach, anyone can learn it. This guide will help you get started on your journey to becoming a web developer.

## Choose Your Path

Web development is broadly divided into three areas:

- **Frontend Development**: Creating the user interface and user experience of websites.
- **Backend Development**: Building the server-side logic that powers websites.
- **Full Stack Development**: Combining both frontend and backend skills.

## Essential Technologies to Learn

### For Frontend Development:
- HTML: The structure of web pages
- CSS: The styling and layout
- JavaScript: Adding interactivity

### For Backend Development:
- A server-side language (Node.js, Python, Ruby, PHP, etc.)
- Databases (SQL or NoSQL)
- API development

## Start with the Basics

Begin by mastering HTML and CSS. These are the building blocks of any website. Create simple static websites to practice these skills.

## Move on to JavaScript

JavaScript adds interactivity to your websites. Start with the fundamentals like variables, functions, and DOM manipulation.

## Learn a Framework

Once you're comfortable with the basics, learn a popular framework like React, Angular, or Vue for frontend, or Express, Django, or Ruby on Rails for backend.

## Practice, Practice, Practice

Build projects. Start small and gradually increase complexity. This hands-on experience is invaluable.

## Join the Community

Engage with other developers through forums, social media, and local meetups. The web development community is supportive and can help you grow.

## Keep Learning

Web development is constantly evolving. Stay up-to-date with the latest trends and technologies by following blogs, podcasts, and online courses.

Remember, everyone starts somewhere. Be patient with yourself, stay consistent, and enjoy the process of learning and creating!
    `,
    author: "Jane Smith",
    date: "2025-05-01",
    readTime: "5 min",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop",
    featured: true
  },
  {
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
  },
  {
    id: 3,
    title: "JavaScript Frameworks in 2025",
    excerpt: "A comparison of the most popular JavaScript frameworks and when to use each one.",
    content: `
# JavaScript Frameworks in 2025

The JavaScript ecosystem continues to evolve rapidly. Let's take a look at the current landscape of JavaScript frameworks and when to use each one.

## React

React remains a powerhouse in the frontend world. It's known for its component-based architecture and virtual DOM.

**Best for:**
- Large-scale applications
- Teams that value flexibility
- Projects that need a robust ecosystem

**Latest Features:**
- Server Components
- Concurrent rendering
- Automatic state batching

## Vue.js

Vue.js continues to gain popularity due to its gentle learning curve and comprehensive documentation.

**Best for:**
- Startups and small to medium projects
- Developers coming from traditional web development
- Projects that need quick iteration

**Latest Features:**
- Improved TypeScript support
- Composition API enhancements
- Better performance optimizations

## Angular

Angular remains the go-to enterprise solution, offering a complete framework with everything included.

**Best for:**
- Enterprise applications
- Teams that prefer strict guidelines
- Projects that need built-in solutions for common requirements

**Latest Features:**
- Signal-based reactivity
- Standalone components by default
- Improved build performance

## Svelte

Svelte's compiler-focused approach continues to disrupt the traditional framework model.

**Best for:**
- Performance-critical applications
- Smaller projects
- Developers who prefer writing less code

**Latest Features:**
- Runes for reactive programming
- Enhanced server-side rendering
- Improved animation capabilities

## Choosing the Right Framework

When selecting a framework, consider:

1. **Team Expertise**: What does your team already know?
2. **Project Requirements**: What specific features do you need?
3. **Performance Needs**: How critical is optimal performance?
4. **Timeline**: Do you need to ship quickly?
5. **Long-term Support**: Will this project need maintenance for years?

Remember, there's no "best" framework - only the right tool for your specific needs.
    `,
    author: "Michael Chen",
    date: "2025-04-18",
    readTime: "6 min",
    category: "JavaScript",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
    featured: true
  },
  {
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
  },
  {
    id: 5,
    title: "Introduction to API Design",
    excerpt: "Learn the principles of creating effective, user-friendly APIs for your applications.",
    content: `
# Introduction to API Design

A well-designed API can make or break a developer's experience when integrating with your service. This guide covers the fundamental principles of effective API design.

## What Makes a Good API?

A good API is:

- **Intuitive**: Developers can guess how to use it without extensive documentation
- **Consistent**: Follows predictable patterns and conventions
- **Well-documented**: Provides clear, comprehensive documentation
- **Versioned**: Changes don't break existing integrations
- **Secure**: Implements proper authentication and authorization
- **Performant**: Responds quickly and efficiently

## RESTful API Design Principles

### Use HTTP Methods Appropriately

- **GET**: Retrieve resources
- **POST**: Create new resources
- **PUT**: Update a resource completely
- **PATCH**: Update a resource partially
- **DELETE**: Remove a resource

### Use Nouns for Resource URLs

\`\`\`
# Good
GET /users/123

# Not as good
GET /getUser/123
\`\`\`

### Use HTTP Status Codes Correctly

- **2xx**: Success (200 OK, 201 Created, 204 No Content)
- **3xx**: Redirection (301 Moved Permanently)
- **4xx**: Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found)
- **5xx**: Server Error (500 Internal Server Error)

### Handle Errors Consistently

\`\`\`json
{
  "error": {
    "code": "validation_error",
    "message": "The request was invalid",
    "details": ["Name field is required"]
  }
}
\`\`\`

## GraphQL API Design

GraphQL offers an alternative to REST with some distinct advantages:

- Clients specify exactly what data they need
- Multiple resources in a single request
- Strong typing system
- Introspection for better tooling

Example query:

\`\`\`graphql
query {
  user(id: "123") {
    name
    email
    posts {
      title
      commentCount
    }
  }
}
\`\`\`

## API Authentication Options

### API Keys

Simple but effective for public APIs:

\`\`\`
GET /api/resources?api_key=YOUR_API_KEY
\`\`\`

### OAuth 2.0

More complex but secure for user data:

1. User authorizes your app
2. Your app receives an access token
3. Use the token for authenticated requests

### JWT (JSON Web Tokens)

Stateless authentication with signed tokens:

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## API Versioning

APIs need to evolve while maintaining compatibility. Common versioning strategies:

### URL Path Versioning

\`\`\`
https://api.example.com/v1/resources
https://api.example.com/v2/resources
\`\`\`

### Header Versioning

\`\`\`
Accept: application/vnd.example.v1+json
\`\`\`

### Query Parameter Versioning

\`\`\`
https://api.example.com/resources?version=1
\`\`\`

## Documentation Best Practices

- Provide clear, concise explanations
- Include request/response examples
- Document all parameters and return values
- Keep documentation up-to-date with the API
- Consider interactive documentation (like Swagger/OpenAPI)

Remember, a well-designed API is an investment that pays off through developer satisfaction, fewer support requests, and more successful integrations.
    `,
    author: "David Kim",
    date: "2025-04-05",
    readTime: "8 min",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop",
    featured: false
  }
];
