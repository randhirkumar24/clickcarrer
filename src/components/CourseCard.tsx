import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
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

  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {course.isFree ? 'Free' : `$${course.price}`}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {course.level}
          </span>
        </div>
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
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="font-medium">{course.instructor}</span>
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
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <AcademicCapIcon className="h-4 w-4 mr-1" />
            <span>{course.modules} modules</span>
          </div>
          {course.certificate && (
            <div className="flex items-center text-sm text-green-600">
              <AcademicCapIcon className="h-4 w-4 mr-1" />
              <span>Certificate</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <Link
            to={`/course/${course.id}`}
            className="btn-primary flex-1 text-center"
          >
            {course.isFree ? 'Enroll Free' : 'Learn More'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 