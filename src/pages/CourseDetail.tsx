import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  PlayCircleIcon, 
  ClockIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  StarIcon,
  CheckCircleIcon,
  BookOpenIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { allCourses } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const course = allCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <StarIconSolid className="h-5 w-5 text-yellow-400" />
        ) : (
          <StarIcon className="h-5 w-5 text-gray-300" />
        )}
      </span>
    ));
  };

  const formatStudentCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Mock curriculum data
  const curriculum = [
    {
      id: 1,
      title: "Introduction and Setup",
      duration: "45 min",
      lessons: [
        { id: 1, title: "Welcome to the Course", duration: "5 min", type: "video" },
        { id: 2, title: "Setting Up Your Environment", duration: "15 min", type: "video" },
        { id: 3, title: "Course Resources", duration: "10 min", type: "reading" },
        { id: 4, title: "Knowledge Check", duration: "15 min", type: "quiz" }
      ]
    },
    {
      id: 2,
      title: "Core Concepts",
      duration: "2 hours",
      lessons: [
        { id: 5, title: "Fundamental Principles", duration: "30 min", type: "video" },
        { id: 6, title: "Key Terminology", duration: "20 min", type: "video" },
        { id: 7, title: "Practical Examples", duration: "45 min", type: "video" },
        { id: 8, title: "Hands-on Exercise", duration: "25 min", type: "assignment" }
      ]
    },
    {
      id: 3,
      title: "Advanced Topics",
      duration: "1.5 hours",
      lessons: [
        { id: 9, title: "Advanced Techniques", duration: "40 min", type: "video" },
        { id: 10, title: "Case Studies", duration: "30 min", type: "video" },
        { id: 11, title: "Best Practices", duration: "20 min", type: "reading" }
      ]
    },
    {
      id: 4,
      title: "Final Project",
      duration: "1 hour",
      lessons: [
        { id: 12, title: "Project Requirements", duration: "10 min", type: "reading" },
        { id: 13, title: "Building Your Project", duration: "40 min", type: "assignment" },
        { id: 14, title: "Peer Review", duration: "10 min", type: "discussion" }
      ]
    }
  ];

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! The instructor explains concepts clearly and provides practical examples. Highly recommended for beginners."
    },
    {
      id: 2,
      user: "David L.",
      rating: 4,
      date: "1 month ago",
      comment: "Great content and well-structured. The hands-on exercises really helped me understand the material better."
    },
    {
      id: 3,
      user: "Maria K.",
      rating: 5,
      date: "3 weeks ago",
      comment: "This course exceeded my expectations. The certificate is a nice bonus. Will definitely take more courses from this instructor."
    }
  ];

  const getIconForLessonType = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircleIcon className="h-5 w-5 text-blue-500" />;
      case 'reading':
        return <DocumentTextIcon className="h-5 w-5 text-green-500" />;
      case 'quiz':
        return <CheckCircleIcon className="h-5 w-5 text-purple-500" />;
      case 'assignment':
        return <BookOpenIcon className="h-5 w-5 text-orange-500" />;
      default:
        return <PlayCircleIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {course.zone}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  {renderStars(course.rating)}
                  <span className="ml-2 text-lg font-semibold">{course.rating}</span>
                  <span className="ml-1 text-gray-400">({formatStudentCount(course.studentsCount)} students)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <div>
                    <div>{course.instructor}</div>
                    <div className="text-gray-400 text-xs">{course.instructorCredentials}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-5 w-5 mr-2" />
                  <span>{course.language}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="relative mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <PlayCircleIcon className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {course.isFree ? 'Free' : formatPrice(course.price)}
                  </div>
                  {course.originalPrice && (
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(course.originalPrice)}
                      </span>
                      <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                        {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                  <p className="text-gray-600">
                    {course.liveClasses ? 'Live classes with recording access' : 'Self-paced learning'}
                  </p>
                  {course.oneOnOne && (
                    <p className="text-sm text-blue-600 mt-1">Includes 1-on-1 mentoring sessions</p>
                  )}
                </div>
                
                <button className="w-full btn-primary mb-4">
                  {course.isFree ? 'Enroll for Free' : 'Buy Now'}
                </button>

                {course.youtubeDemo && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Watch Demo:</h4>
                    <div className="relative w-full h-0 pb-9/16 mb-3">
                      <iframe
                        src={`https://www.youtube.com/embed/${course.youtubeDemo}`}
                        title="Course Demo"
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                {course.nextLiveClass && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">Next Live Class:</h4>
                    <p className="text-sm text-blue-700">
                      {new Date(course.nextLiveClass).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">This course includes:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      {course.modules} comprehensive modules
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      {course.duration} of expert instruction
                    </li>
                    {course.liveClasses && (
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                        Live interactive classes
                      </li>
                    )}
                    {course.oneOnOne && (
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                        1-on-1 mentoring sessions
                      </li>
                    )}
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      Lifetime access to recordings
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      Mobile and desktop access
                    </li>
                    {course.certificate && (
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                        Industry-recognized certificate
                      </li>
                    )}
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      Available in {course.language}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {['overview', 'curriculum', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About this course</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-4">
                      {course.description}
                    </p>
                    <p className="text-gray-700 mb-4">
                      This comprehensive course is designed to take you from beginner to advanced level in {course.title.toLowerCase()}. 
                      You'll learn through a combination of video lectures, hands-on exercises, and real-world projects.
                    </p>
                    <p className="text-gray-700">
                      By the end of this course, you'll have the skills and knowledge needed to confidently work with the concepts 
                      and techniques covered in the curriculum. Perfect for professionals looking to advance their careers or 
                      students seeking to expand their knowledge.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Skills you'll gain</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course curriculum</h2>
                <div className="space-y-4">
                  {curriculum.map((module, index) => (
                    <div key={module.id} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-medium text-gray-900">
                            {module.title}
                          </span>
                          <span className="text-sm text-gray-500">
                            {module.duration}
                          </span>
                        </div>
                        {expandedModule === index ? (
                          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedModule === index && (
                        <div className="px-6 pb-4 border-t">
                          <div className="space-y-2 pt-4">
                            {module.lessons.map((lesson) => (
                              <div key={lesson.id} className="flex items-center space-x-3 py-2">
                                {getIconForLessonType(lesson.type)}
                                <span className="flex-1 text-sm text-gray-700">{lesson.title}</span>
                                <span className="text-xs text-gray-500">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Student reviews</h2>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl font-bold text-gray-900">{course.rating}</div>
                    <div>
                      <div className="flex items-center mb-1">
                        {renderStars(course.rating)}
                      </div>
                      <div className="text-sm text-gray-500">
                        Based on {formatStudentCount(course.studentsCount)} reviews
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {review.user.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{review.user}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    {course.instructor.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{course.instructor}</div>
                  <div className="text-sm text-gray-500">Course Instructor</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Experienced professional with over 10 years in the industry. 
                Passionate about sharing knowledge and helping students succeed.
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-2">Course Details</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Level: {course.level}</li>
                  <li>Duration: {course.duration}</li>
                  <li>Language: English</li>
                  <li>Students: {formatStudentCount(course.studentsCount)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 