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
          <StarIconSolid className="h-3 w-3 xs:h-4 xs:w-4 text-yellow-400" />
        ) : (
          <StarIcon className="h-3 w-3 xs:h-4 xs:w-4 text-gray-300" />
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

  const handleBuyNow = () => {
    const message = `Hi! I'm interested in enrolling in the "${course.title}" course. Can you please provide me with more details about enrollment and payment options?`;
    const whatsappUrl = `https://wa.me/917903817049?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 xs:h-44 sm:h-48 object-cover"
        />
        <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4">
          <span className="inline-flex items-center px-2 xs:px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {course.zone}
          </span>
        </div>
        <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4">
          <span className="inline-flex items-center px-2 xs:px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
            {course.level}
          </span>
        </div>
        {course.liveClasses && (
          <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4">
            <span className="inline-flex items-center px-2 xs:px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <VideoCameraIcon className="h-3 w-3 mr-1" />
              Live Classes
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 xs:p-5 sm:p-6 flex-1 flex flex-col">
        <div className="mb-2 xs:mb-3">
          <span className="inline-flex items-center px-2 xs:px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {course.category}
          </span>
        </div>
        
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
          {course.title}
        </h3>
        
        <p className="text-sm xs:text-base text-gray-600 mb-3 line-clamp-3 leading-relaxed">
          {course.description}
        </p>
        
        <div className="flex items-start text-sm text-gray-500 mb-3">
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-700 text-sm xs:text-base truncate">{course.instructor}</div>
            <div className="text-xs xs:text-sm text-gray-500 line-clamp-2 leading-relaxed">{course.instructorCredentials}</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3 xs:mb-4">
          <div className="flex items-center space-x-3 xs:space-x-4 text-xs xs:text-sm text-gray-500">
            <div className="flex items-center">
              <ClockIcon className="h-3 w-3 xs:h-4 xs:w-4 mr-1" />
              <span className="truncate">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-3 w-3 xs:h-4 xs:w-4 mr-1" />
              <span>{formatStudentCount(course.studentsCount)}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {renderStars(course.rating)}
            <span className="text-xs xs:text-sm text-gray-600 ml-1">{course.rating}</span>
          </div>
        </div>

        {course.liveClasses && course.nextLiveClass && (
          <div className="flex items-center text-xs xs:text-sm text-blue-600 mb-3 xs:mb-4">
            <CalendarDaysIcon className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
            <span className="truncate">Next Live: {new Date(course.nextLiveClass).toLocaleDateString('en-IN')}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3 xs:mb-4">
          <div className="flex items-center text-xs xs:text-sm text-gray-500">
            <AcademicCapIcon className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{course.modules} modules • {course.language}</span>
          </div>
          {course.certificate && (
            <div className="flex items-center text-xs xs:text-sm text-green-600">
              <AcademicCapIcon className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
              <span>Certificate</span>
            </div>
          )}
        </div>

        {/* Pricing Section */}
        <div className="mb-4">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900">
              {formatPrice(course.price)}
            </span>
            {course.originalPrice && (
              <>
                <span className="text-sm xs:text-base sm:text-lg text-gray-500 line-through">
                  {formatPrice(course.originalPrice)}
                </span>
                <span className="text-xs xs:text-sm font-medium text-green-600 bg-green-100 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded">
                  {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>
          {course.oneOnOne && (
            <div className="text-xs xs:text-sm text-gray-500 mt-1">Includes 1-on-1 sessions</div>
          )}
        </div>
        
        <div className="mt-auto space-y-2 xs:space-y-3">
          <button
            onClick={handleBuyNow}
            className="btn-primary w-full text-center py-2.5 xs:py-3 text-sm xs:text-base"
          >
            Buy Now
          </button>
          {course.youtubeDemo && (
            <a
              href={`https://www.youtube.com/watch?v=${course.youtubeDemo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center py-2.5 xs:py-3 text-sm xs:text-base"
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