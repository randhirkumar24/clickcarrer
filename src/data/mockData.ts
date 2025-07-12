export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorCredentials: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  zone: 'Technical Zone' | 'Govt Exam Zone' | 'Communication Zone' | 'AI & Freelancing Zone';
  image: string;
  youtubeDemo: string; // YouTube video ID
  rating: number;
  studentsCount: number;
  price: number; // In INR
  originalPrice?: number; // Original price for discount display
  isFree: boolean;
  skills: string[];
  modules: number;
  certificate: boolean;
  liveClasses: boolean;
  oneOnOne: boolean;
  language: string;
  nextLiveClass?: string; // Date string
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  coursesCount: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'technical',
    name: 'Technical Zone',
    icon: '⚡',
    coursesCount: 25,
    color: 'bg-blue-500'
  },
  {
    id: 'govt-exam',
    name: 'Govt Exam Zone',
    icon: '🏛️',
    coursesCount: 20,
    color: 'bg-green-500'
  },
  {
    id: 'communication',
    name: 'Communication Zone',
    icon: '🎤',
    coursesCount: 15,
    color: 'bg-purple-500'
  },
  {
    id: 'ai-freelancing',
    name: 'AI & Freelancing Zone',
    icon: '🤖',
    coursesCount: 18,
    color: 'bg-orange-500'
  }
];

export const featuredCourses: Course[] = [
  // Technical Zone Courses
  {
    id: '1',
    title: 'Complete Networking Mastery with CCNA',
    description: 'Master networking fundamentals, routing, switching, and network security. Live classes with Cisco certified engineers.',
    instructor: 'Rajesh Kumar',
    instructorCredentials: 'CCIE #45678, 15+ years at Cisco Systems',
    duration: '40+ hours',
    level: 'Intermediate',
    category: 'Networking',
    zone: 'Technical Zone',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ', // Sample YouTube ID
    rating: 4.9,
    studentsCount: 1200,
    price: 12999,
    originalPrice: 19999,
    isFree: false,
    skills: ['CCNA', 'Routing & Switching', 'Network Security', 'TCP/IP'],
    modules: 20,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-15T18:00:00Z'
  },
  {
    id: '2',
    title: 'Python Programming for Automation',
    description: 'Learn Python from scratch with live coding sessions and real-world automation projects.',
    instructor: 'Priya Sharma',
    instructorCredentials: 'Senior Software Engineer at Google, Python Expert',
    duration: '35+ hours',
    level: 'Beginner',
    category: 'Programming',
    zone: 'Technical Zone',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsCount: 2100,
    price: 9999,
    originalPrice: 14999,
    isFree: false,
    skills: ['Python Basics', 'Automation', 'Web Scraping', 'API Development'],
    modules: 18,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-12T19:00:00Z'
  },
  {
    id: '3',
    title: 'Linux System Administration Bootcamp',
    description: 'Complete Linux mastery from basics to advanced system administration with hands-on labs.',
    instructor: 'Amit Singh',
    instructorCredentials: 'Red Hat Certified Architect, 12+ years Linux Expert',
    duration: '45+ hours',
    level: 'Intermediate',
    category: 'Linux',
    zone: 'Technical Zone',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.7,
    studentsCount: 850,
    price: 14999,
    originalPrice: 22999,
    isFree: false,
    skills: ['Linux Commands', 'Shell Scripting', 'System Administration', 'Docker'],
    modules: 25,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-14T17:00:00Z'
  },
  
  // Government Exam Zone Courses
  {
    id: '4',
    title: 'SSC CGL Complete Preparation',
    description: 'Comprehensive preparation for SSC CGL with live classes, mock tests, and current affairs.',
    instructor: 'Dr. Vikash Gupta',
    instructorCredentials: 'IAS Officer (Retd.), 20+ years in Civil Services',
    duration: '80+ hours',
    level: 'Intermediate',
    category: 'Government Exams',
    zone: 'Govt Exam Zone',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.9,
    studentsCount: 3500,
    price: 8999,
    originalPrice: 12999,
    isFree: false,
    skills: ['Quantitative Aptitude', 'English', 'General Studies', 'Reasoning'],
    modules: 30,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi',
    nextLiveClass: '2024-01-13T16:00:00Z'
  },
  {
    id: '5',
    title: 'Advanced Excel for Government Jobs',
    description: 'Master Excel for competitive exams and government job requirements with practical applications.',
    instructor: 'Sunita Agarwal',
    instructorCredentials: 'Former Bank PO, Excel Certified Trainer',
    duration: '25+ hours',
    level: 'Beginner',
    category: 'Computer Skills',
    zone: 'Govt Exam Zone',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.6,
    studentsCount: 1800,
    price: 5999,
    originalPrice: 8999,
    isFree: false,
    skills: ['Excel Formulas', 'Data Analysis', 'Pivot Tables', 'Charts & Graphs'],
    modules: 15,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-16T15:00:00Z'
  },
  
  // Communication Zone Courses
  {
    id: '6',
    title: 'Fluent English Speaking Course',
    description: 'Transform your English speaking skills with live conversation practice and personality development.',
    instructor: 'Sarah Williams',
    instructorCredentials: 'Cambridge Certified, 10+ years Corporate Trainer',
    duration: '30+ hours',
    level: 'Beginner',
    category: 'English Speaking',
    zone: 'Communication Zone',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsCount: 4200,
    price: 7999,
    originalPrice: 11999,
    isFree: false,
    skills: ['Fluent Speaking', 'Grammar', 'Vocabulary', 'Pronunciation'],
    modules: 20,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'English',
    nextLiveClass: '2024-01-11T18:30:00Z'
  },
  {
    id: '7',
    title: 'Interview Mastery & Job Preparation',
    description: 'Complete interview preparation with mock interviews, resume building, and industry insights.',
    instructor: 'Rahul Mehta',
    instructorCredentials: 'HR Director at TCS, 15+ years Industry Experience',
    duration: '20+ hours',
    level: 'Intermediate',
    category: 'Interview Preparation',
    zone: 'Communication Zone',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.7,
    studentsCount: 2800,
    price: 6999,
    originalPrice: 9999,
    isFree: false,
    skills: ['Interview Skills', 'Resume Writing', 'Body Language', 'Confidence Building'],
    modules: 12,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-17T19:00:00Z'
  },
  
  // AI & Freelancing Zone Courses
  {
    id: '8',
    title: 'Complete Digital Marketing & SEO Mastery',
    description: 'Learn digital marketing, SEO, content creation, and build your freelancing career.',
    instructor: 'Neha Agarwal',
    instructorCredentials: 'Digital Marketing Expert, 50+ Client Success Stories',
    duration: '35+ hours',
    level: 'Beginner',
    category: 'Digital Marketing',
    zone: 'AI & Freelancing Zone',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsCount: 3100,
    price: 11999,
    originalPrice: 17999,
    isFree: false,
    skills: ['SEO', 'Social Media Marketing', 'Content Writing', 'Google Ads'],
    modules: 22,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-15T20:00:00Z'
  },
  {
    id: '9',
    title: 'Professional Blogging & Content Writing',
    description: 'Start your blogging journey and build a successful content writing business from scratch.',
    instructor: 'Arjun Kapoor',
    instructorCredentials: 'Professional Blogger, 1M+ Monthly Readers',
    duration: '25+ hours',
    level: 'Beginner',
    category: 'Content Writing',
    zone: 'AI & Freelancing Zone',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.6,
    studentsCount: 1900,
    price: 8999,
    originalPrice: 12999,
    isFree: false,
    skills: ['Blog Writing', 'SEO Writing', 'Content Strategy', 'Monetization'],
    modules: 16,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-18T19:30:00Z'
  }
];

export const allCourses: Course[] = [
  ...featuredCourses,
  // Additional courses for each zone
  {
    id: '10',
    title: 'SD-WAN Implementation & Troubleshooting',
    description: 'Master SD-WAN technology with hands-on labs and real-world implementation scenarios.',
    instructor: 'Sandeep Jain',
    instructorCredentials: 'CCIE Security, Network Architect at Cisco',
    duration: '30+ hours',
    level: 'Advanced',
    category: 'SD-WAN',
    zone: 'Technical Zone',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsCount: 650,
    price: 16999,
    originalPrice: 24999,
    isFree: false,
    skills: ['SD-WAN Architecture', 'Viptela', 'Cisco SD-WAN', 'Network Security'],
    modules: 18,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi & English',
    nextLiveClass: '2024-01-20T18:00:00Z'
  },
  {
    id: '11',
    title: 'UPSC Prelims & Mains Strategy',
    description: 'Complete UPSC preparation with current affairs, essay writing, and interview preparation.',
    instructor: 'Dr. Anita Sharma',
    instructorCredentials: 'IAS Officer (2010 Batch), UPSC Mentor',
    duration: '120+ hours',
    level: 'Advanced',
    category: 'UPSC',
    zone: 'Govt Exam Zone',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    youtubeDemo: 'dQw4w9WgXcQ',
    rating: 4.9,
    studentsCount: 2200,
    price: 15999,
    originalPrice: 24999,
    isFree: false,
    skills: ['General Studies', 'Essay Writing', 'Current Affairs', 'Optional Subject'],
    modules: 45,
    certificate: true,
    liveClasses: true,
    oneOnOne: true,
    language: 'Hindi',
    nextLiveClass: '2024-01-19T14:00:00Z'
  }
];

export const stats = {
  totalLearners: '25,000+',
  totalCourses: '78+',
  certificates: '15,000+',
  countries: '5+'
};

// Blog Post Interface
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

// Sample Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete CCNA Study Guide 2024: Your Path to Network Mastery',
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

With dedication and the right study approach, CCNA certification can significantly boost your networking career. Start your journey today!`,
    author: 'Rajesh Kumar',
    authorRole: 'CCIE #45678, Senior Network Engineer',
    publishDate: '2024-01-10',
    readTime: '8 min',
    category: 'Technical Zone',
    tags: ['CCNA', 'Networking', 'Cisco', 'Career'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'SSC CGL 2025: Complete Preparation Strategy',
    excerpt: 'Master the SSC CGL exam with our comprehensive preparation strategy, study plan, and expert tips.',
    content: `# SSC CGL 20255: Complete Preparation Strategy

The Staff Selection Commission Combined Graduate Level (SSC CGL) exam is one of India's most competitive government exams. Here's your complete roadmap to success.

## Exam Pattern Overview

### Tier 1: Computer Based Examination
- General Intelligence & Reasoning (25 questions)
- General Awareness (25 questions)
- Quantitative Aptitude (25 questions)
- English Comprehension (25 questions)

### Study Schedule

Phase 1: Foundation (3 months) - Complete syllabus coverage
Phase 2: Practice (2 months) - Mock tests and previous papers
Phase 3: Revision (1 month) - Final preparation

## Key Tips

1. Consistent Practice: Daily 4-5 hours of focused study
2. Mock Tests: Take at least 50 full-length tests
3. Current Affairs: Stay updated with last 6 months events
4. Time Management: Practice with timer always

## Success Mantra

Remember, SSC CGL is not just about intelligence but consistency and smart work. Stay motivated and follow your study plan religiously.`,
    author: 'Dr. Vikash Gupta',
    authorRole: 'IAS Officer (Retd.), UPSC Mentor',
    publishDate: '2024-01-08',
    readTime: '10 min',
    category: 'Govt Exam Zone',
    tags: ['SSC CGL', 'Government Jobs', 'Preparation', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'How to Start Freelancing in Digital Marketing: A Beginner\'s Guide',
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
- SEO: ₹500-1000/hour
- Social Media: ₹400-800/hour
- Content Writing: ₹300-600/hour

## Conclusion

Freelancing in digital marketing requires patience, skill development, and persistence. Start small, deliver quality work, and gradually build your reputation.`,
    author: 'Neha Agarwal',
    authorRole: 'Digital Marketing Expert, Freelancer',
    publishDate: '2024-01-05',
    readTime: '12 min',
    category: 'AI & Freelancing Zone',
    tags: ['Freelancing', 'Digital Marketing', 'SEO', 'Income'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: '4',
    title: '10 Common English Speaking Mistakes Indians Make',
    excerpt: 'Identify and correct the most common English speaking errors that hold back Indian professionals in their careers.',
    content: `# 10 Common English Speaking Mistakes Indians Make

English proficiency can significantly impact your career growth. Here are the most common mistakes Indian speakers make and how to overcome them.

## 1. Pronunciation Issues
- "W" pronounced as "V" (very → wery)
- "Th" sounds replaced with "D" or "T"
- Practice with pronunciation apps and record yourself

## 2. Grammatical Errors
- Mistake: "I am having a car" 
- Correct: "I have a car"
- Have/has for possession doesn't use continuous form

## 3. Direct Translation
- Mistake: "What is your good name?"
- Correct: "What is your name?"
- Avoid direct translation from Hindi/regional languages

## 4. Preposition Confusion
- "Discuss about" → "Discuss"
- "Reach to" → "Reach"
- "Order for food" → "Order food"

## Professional Impact

Good English skills can:
- Increase salary by 30-50%
- Open international opportunities
- Boost confidence in presentations
- Improve networking abilities

## Practice Exercises

Daily routine: Read English news aloud (15 min), practice tongue twisters (5 min), record yourself speaking (10 min).

## Conclusion

Making mistakes is part of learning. Focus on clarity over accent - your goal should be clear communication.`,
    author: 'Sarah Williams',
    authorRole: 'Cambridge Certified English Trainer',
    publishDate: '2024-01-03',
    readTime: '15 min',
    category: 'Communication Zone',
    tags: ['English Speaking', 'Communication', 'Career', 'Professional'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  }
]; 