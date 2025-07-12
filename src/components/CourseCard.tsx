import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon, UserGroupIcon, AcademicCapIcon, VideoCameraIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { Course } from '../data/mockData';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <StarIconSolid className="h-4 w-4 text-yellow-400" />
        ) : (
          <StarIcon className="h-4 w-4 text-gray-300" />
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

  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {course.zone}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
            {course.level}
          </span>
        </div>
        {course.liveClasses && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <VideoCameraIcon className="h-3 w-3 mr-1" />
              Live Classes
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {course.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {course.description}
        </p>
        
        <div className="flex items-start text-sm text-gray-500 mb-3">
          <div>
            <div className="font-medium text-gray-700">{course.instructor}</div>
            <div className="text-xs text-gray-500">{course.instructorCredentials}</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-4 w-4 mr-1" />
              {formatStudentCount(course.studentsCount)}
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {renderStars(course.rating)}
            <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
          </div>
        </div>

        {course.nextLiveClass && (
          <div className="flex items-center text-sm text-blue-600 mb-4">
            <CalendarDaysIcon className="h-4 w-4 mr-1" />
            <span>Next Live: {new Date(course.nextLiveClass).toLocaleDateString('en-IN')}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <AcademicCapIcon className="h-4 w-4 mr-1" />
            <span>{course.modules} modules • {course.language}</span>
          </div>
          {course.certificate && (
            <div className="flex items-center text-sm text-green-600">
              <AcademicCapIcon className="h-4 w-4 mr-1" />
              <span>Certificate</span>
            </div>
          )}
        </div>

        {/* Pricing Section */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(course.price)}
            </span>
            {course.originalPrice && (
              <>
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(course.originalPrice)}
                </span>
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                  {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>
          {course.oneOnOne && (
            <div className="text-xs text-gray-500 mt-1">Includes 1-on-1 sessions</div>
          )}
        </div>
        
        <div className="flex flex-col space-y-2">
          <Link
            to={`/course/${course.id}`}
            className="btn-primary flex-1 text-center"
          >
            Buy Now
          </Link>
          {course.youtubeDemo && (
            <a
              href={`https://www.youtube.com/watch?v=${course.youtubeDemo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center text-sm"
            >
              Watch Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 