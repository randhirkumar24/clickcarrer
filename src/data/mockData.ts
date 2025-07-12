export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
  rating: number;
  studentsCount: number;
  price: number;
  isFree: boolean;
  skills: string[];
  modules: number;
  certificate: boolean;
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
    id: 'it',
    name: 'IT & Computer Science',
    icon: '💻',
    coursesCount: 450,
    color: 'bg-blue-500'
  },
  {
    id: 'health',
    name: 'Health & Medicine',
    icon: '🏥',
    coursesCount: 320,
    color: 'bg-green-500'
  },
  {
    id: 'business',
    name: 'Business & Management',
    icon: '💼',
    coursesCount: 380,
    color: 'bg-purple-500'
  },
  {
    id: 'language',
    name: 'Language Learning',
    icon: '🗣️',
    coursesCount: 280,
    color: 'bg-orange-500'
  },
  {
    id: 'marketing',
    name: 'Marketing & Sales',
    icon: '📈',
    coursesCount: 250,
    color: 'bg-pink-500'
  },
  {
    id: 'design',
    name: 'Design & Media',
    icon: '🎨',
    coursesCount: 200,
    color: 'bg-indigo-500'
  },
  {
    id: 'personal',
    name: 'Personal Development',
    icon: '🌟',
    coursesCount: 180,
    color: 'bg-yellow-500'
  },
  {
    id: 'engineering',
    name: 'Engineering & Construction',
    icon: '🏗️',
    coursesCount: 150,
    color: 'bg-red-500'
  }
];

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',
    instructor: 'Sarah Johnson',
    duration: '8 hours',
    level: 'Beginner',
    category: 'IT & Computer Science',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    studentsCount: 12500,
    price: 0,
    isFree: true,
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    modules: 12,
    certificate: true
  },
  {
    id: '2',
    title: 'Digital Marketing Fundamentals',
    description: 'Master the basics of digital marketing including SEO, social media, and content marketing.',
    instructor: 'Michael Chen',
    duration: '6 hours',
    level: 'Beginner',
    category: 'Marketing & Sales',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    studentsCount: 8900,
    price: 0,
    isFree: true,
    skills: ['SEO', 'Social Media Marketing', 'Content Marketing', 'Analytics'],
    modules: 10,
    certificate: true
  },
  {
    id: '3',
    title: 'Introduction to Data Science',
    description: 'Learn data analysis, visualization, and machine learning basics with Python.',
    instructor: 'Dr. Emily Rodriguez',
    duration: '12 hours',
    level: 'Intermediate',
    category: 'IT & Computer Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    studentsCount: 6700,
    price: 0,
    isFree: true,
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'Visualization'],
    modules: 15,
    certificate: true
  },
  {
    id: '4',
    title: 'Project Management Essentials',
    description: 'Learn project management methodologies, tools, and best practices.',
    instructor: 'James Wilson',
    duration: '5 hours',
    level: 'Beginner',
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.6,
    studentsCount: 9200,
    price: 0,
    isFree: true,
    skills: ['Project Planning', 'Team Management', 'Risk Management', 'Agile'],
    modules: 8,
    certificate: true
  },
  {
    id: '5',
    title: 'Graphic Design Basics',
    description: 'Learn design principles, color theory, and typography for effective visual communication.',
    instructor: 'Lisa Thompson',
    duration: '7 hours',
    level: 'Beginner',
    category: 'Design & Media',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    studentsCount: 5400,
    price: 0,
    isFree: true,
    skills: ['Design Principles', 'Color Theory', 'Typography', 'Adobe Creative Suite'],
    modules: 9,
    certificate: true
  },
  {
    id: '6',
    title: 'Introduction to Psychology',
    description: 'Explore the fundamental concepts of human behavior and mental processes.',
    instructor: 'Dr. Robert Garcia',
    duration: '10 hours',
    level: 'Beginner',
    category: 'Personal Development',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    studentsCount: 7800,
    price: 0,
    isFree: true,
    skills: ['Cognitive Psychology', 'Behavioral Psychology', 'Research Methods', 'Statistics'],
    modules: 14,
    certificate: true
  }
];

export const allCourses: Course[] = [
  ...featuredCourses,
  // Add more courses for the catalog
  {
    id: '7',
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts including ES6+, async programming, and modern frameworks.',
    instructor: 'Alex Morgan',
    duration: '15 hours',
    level: 'Advanced',
    category: 'IT & Computer Science',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    studentsCount: 4200,
    price: 0,
    isFree: true,
    skills: ['ES6+', 'Async Programming', 'DOM Manipulation', 'API Integration'],
    modules: 18,
    certificate: true
  },
  {
    id: '8',
    title: 'Financial Planning Basics',
    description: 'Learn personal finance management, budgeting, and investment strategies.',
    instructor: 'David Kim',
    duration: '6 hours',
    level: 'Beginner',
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.5,
    studentsCount: 6300,
    price: 0,
    isFree: true,
    skills: ['Budgeting', 'Investment', 'Risk Management', 'Financial Planning'],
    modules: 8,
    certificate: true
  }
];

export const stats = {
  totalLearners: '40,000,000+',
  totalCourses: '4,000+',
  certificates: '15,000,000+',
  countries: '195+'
}; 