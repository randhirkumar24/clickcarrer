import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  AdjustmentsHorizontalIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { allCourses, categories } from '../data/mockData';
import CourseCard from '../components/CourseCard';

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = allCourses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel) {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // Sort courses
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'duration':
        filtered.sort((a, b) => {
          const aDuration = parseInt(a.duration.replace(/\D/g, ''));
          const bDuration = parseInt(b.duration.replace(/\D/g, ''));
          return aDuration - bDuration;
        });
        break;
      case 'newest':
        // In a real app, you'd sort by creation date
        break;
      default:
        break;
    }

    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
    setSortBy('popular');
    setSearchParams({});
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedLevel || sortBy !== 'popular';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Explore Courses
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover free courses from world-class educators and advance your skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, or skills..."
                className="w-full pl-9 xs:pl-10 pr-4 py-3 xs:py-4 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
              {/* Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center px-4 py-3 xs:py-4 text-sm xs:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FunnelIcon className="h-4 w-4 xs:h-5 xs:w-5 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 xs:flex-none px-4 py-3 xs:py-4 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Shortest Duration</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="mt-4 p-4 xs:p-6 bg-white rounded-lg shadow-md border">
              <div className="flex items-center justify-between mb-4 xs:mb-6">
                <h3 className="text-lg xs:text-xl font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2.5 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level Filter */}
                <div>
                  <label className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2.5 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  >
                    <option value="">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end sm:col-span-2 lg:col-span-1">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2.5 xs:py-3 text-sm xs:text-base font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm xs:text-base text-gray-600">
            Showing {filteredCourses.length} of {allCourses.length} courses
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 rounded-full w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 text-gray-400" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-sm xs:text-base text-gray-600 mb-4">
                Try adjusting your search or filters to find more courses.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 xs:px-6 xs:py-3 text-sm xs:text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Load More Button (if needed) */}
        {filteredCourses.length > 0 && filteredCourses.length >= 12 && (
          <div className="text-center mt-8 sm:mt-12">
            <button className="inline-flex items-center px-6 py-3 xs:px-8 xs:py-4 text-sm xs:text-base font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50 transition-colors">
              Load More Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses; 