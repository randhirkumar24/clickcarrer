import matter from 'gray-matter';
import { BlogPost } from '../data/mockData';

// Since we can't directly read files in the browser, we'll import the content
// In a real production environment, this would be handled by a build process
// For now, let's create the blog posts directly from the content we know exists

const blogPostsData = [
  {
    id: 'ccna-study-guide',
    title: 'Complete CCNA Study Guide 2024: Your Path to Network Mastery',
    author: 'Rajesh Kumar',
    authorRole: 'CCIE #45678, Senior Network Engineer',
    publishDate: '2024-01-10',
    readTime: '8 min',
    category: 'Technical Zone',
    tags: ['CCNA', 'Networking', 'Cisco', 'Career'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
    excerpt: 'Everything you need to know about CCNA certification, study materials, and career opportunities in networking.',
    content: `# Complete CCNA Study Guide 2024

The Cisco Certified Network Associate (CCNA) certification remains one of the most valuable credentials in the networking field. Whether you're starting your career or looking to advance, this comprehensive guide will help you navigate your CCNA journey.

## What is CCNA?

The CCNA certification validates your ability to install, configure, operate, and troubleshoot medium-size routed and switched networks. The current exam (200-301) covers a broad range of networking fundamentals and technologies.

## Study Approach

### 1. Foundation Knowledge
- Start with networking basics
- Understand the OSI and TCP/IP models
- Learn about routing and switching fundamentals

### 2. Hands-on Practice
- Set up a home lab
- Use Packet Tracer for simulations
- Practice with real equipment when possible

### 3. Exam Preparation
- Take practice tests regularly
- Review weak areas
- Join study groups

## Career Opportunities

CCNA opens doors to various networking roles:
- Network Administrator
- Network Engineer
- Technical Support Engineer
- Network Analyst

## Conclusion

With dedication and the right study approach, CCNA certification can significantly boost your networking career. Start your journey today!`
  },
  {
    id: 'ssc-cgl-preparation',
    title: 'SSC CGL 2025: Complete Preparation Strategy',
    author: 'Dr. Vikash Gupta',
    authorRole: 'IAS Officer (Retd.), UPSC Mentor',
    publishDate: '2024-01-08',
    readTime: '10 min',
    category: 'Govt Exam Zone',
    tags: ['SSC CGL', 'Government Jobs', 'Preparation', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
    excerpt: 'Master the SSC CGL exam with our comprehensive preparation strategy, study plan, and expert tips.',
    content: `# SSC CGL 2025: Complete Preparation Strategy

The Staff Selection Commission Combined Graduate Level (SSC CGL) exam is one of India's most competitive government exams. Here's your complete roadmap to success.

## Exam Pattern Overview

### Tier 1: Computer Based Examination
- General Intelligence & Reasoning (25 questions)
- General Awareness (25 questions)
- Quantitative Aptitude (25 questions)
- English Comprehension (25 questions)

### Study Schedule

**Phase 1: Foundation (3 months)** - Complete syllabus coverage
**Phase 2: Practice (2 months)** - Mock tests and previous papers
**Phase 3: Revision (1 month)** - Final preparation

## Key Tips

1. **Consistent Practice**: Daily 4-5 hours of focused study
2. **Mock Tests**: Take at least 50 full-length tests
3. **Current Affairs**: Stay updated with last 6 months events
4. **Time Management**: Practice with timer always

## Subject-wise Strategy

### Quantitative Aptitude
- Focus on basic arithmetic and algebra
- Practice speed calculation techniques
- Master percentage, ratio, and proportion

### General Awareness
- Read newspapers daily
- Focus on current events of last 6 months
- Cover static GK topics systematically

### English Comprehension
- Improve vocabulary daily
- Practice reading comprehension passages
- Focus on grammar rules

### Reasoning
- Practice different types of puzzles
- Master coding-decoding and series
- Work on logical reasoning daily

## Success Mantra

Remember, SSC CGL is not just about intelligence but consistency and smart work. Stay motivated and follow your study plan religiously.`
  },
  {
    id: 'freelancing-digital-marketing',
    title: 'How to Start Freelancing in Digital Marketing: A Beginner\'s Guide',
    author: 'Neha Agarwal',
    authorRole: 'Digital Marketing Expert, Freelancer',
    publishDate: '2024-01-05',
    readTime: '12 min',
    category: 'AI & Freelancing Zone',
    tags: ['Freelancing', 'Digital Marketing', 'SEO', 'Income'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
    excerpt: 'Step-by-step guide to building a successful freelancing career in digital marketing with practical tips and strategies.',
    content: `# How to Start Freelancing in Digital Marketing

Digital marketing freelancing offers incredible opportunities for those willing to learn and adapt. Here's your complete guide to getting started.

## Why Choose Digital Marketing Freelancing?

- High demand for digital marketing skills
- Flexible work arrangements
- Unlimited earning potential
- Opportunity to work with diverse clients

## Essential Skills to Develop

### 1. Search Engine Optimization (SEO)
- Keyword research and on-page optimization
- Link building and technical SEO

### 2. Social Media Marketing
- Platform-specific strategies
- Content creation and community management

### 3. Content Marketing
- Blog writing and email marketing
- Lead generation strategies

## Building Your Portfolio

Start with free projects for local businesses, create case studies, and document your results. Build a professional website showcasing your skills and testimonials.

## Finding Clients

Use online platforms like Upwork, Fiverr, and LinkedIn. Don't forget direct outreach through cold emails and networking events.

## Pricing Your Services

Beginners can start with:
- **SEO**: ₹500-1000/hour
- **Social Media**: ₹400-800/hour
- **Content Writing**: ₹300-600/hour

## Building Long-term Success

### Client Relationships
- Always deliver on time
- Communicate regularly
- Exceed expectations when possible

### Skill Development
- Stay updated with industry trends
- Take online courses regularly
- Join digital marketing communities

## Common Mistakes to Avoid

1. **Underpricing your services** - Know your worth
2. **Taking on too many clients** - Quality over quantity
3. **Not having contracts** - Always use written agreements
4. **Ignoring client feedback** - Use it to improve

## Conclusion

Freelancing in digital marketing requires patience, skill development, and persistence. Start small, deliver quality work, and gradually build your reputation. With dedication and the right approach, you can build a successful freelancing career.`
  }
];

// Function to parse markdown content and extract frontmatter
export const parseMarkdownFile = (filename: string, content: string): BlogPost => {
  const { data: frontmatter, content: markdownContent } = matter(content);
  
  // Extract ID from filename (remove .md extension and date prefix if present)
  const id = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', '');
  
  return {
    id,
    title: frontmatter.title || 'Untitled',
    excerpt: frontmatter.excerpt || '',
    content: markdownContent,
    author: frontmatter.author || 'Anonymous',
    authorRole: frontmatter.authorRole || '',
    publishDate: frontmatter.publishDate || new Date().toISOString().split('T')[0],
    readTime: frontmatter.readTime || '5 min',
    category: frontmatter.category || 'General',
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    image: frontmatter.image || 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: frontmatter.featured || false
  };
};

// Function to load all blog posts from markdown files
export const loadBlogPosts = (): BlogPost[] => {
  // For now, we'll use the pre-defined blog posts data
  // In a real implementation, this would read files from the filesystem
  // and parse them using the parseMarkdownFile function
  
  // Sort by publish date (newest first)
  return blogPostsData.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

// Function to get a single blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  const blogPosts = loadBlogPosts();
  return blogPosts.find(post => post.id === id);
};

// Function to get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  const blogPosts = loadBlogPosts();
  return blogPosts.filter(post => post.category === category);
};

// Function to get featured blog posts
export const getFeaturedBlogPosts = (): BlogPost[] => {
  const blogPosts = loadBlogPosts();
  return blogPosts.filter(post => post.featured);
};

// Function to search blog posts
export const searchBlogPosts = (query: string): BlogPost[] => {
  const blogPosts = loadBlogPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Export the loaded blog posts for backward compatibility
export const markdownBlogPosts = loadBlogPosts();