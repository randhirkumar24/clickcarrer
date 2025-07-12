import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon, StarIcon, UserGroupIcon, AcademicCapIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { featuredCourses, categories, stats } from '../data/mockData';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left w-full">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Live Online Courses with Expert Instructors
              </h1>
              <p className="text-lg xs:text-xl sm:text-2xl text-primary-100 leading-relaxed">
                Learn from Cisco Engineers, Government Officers, and Industry Experts. 
                Get personalized 1-on-1 sessions and advance your career.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Explore Live Courses
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white text-base sm:text-lg font-medium rounded-md text-white hover:bg-primary-500 transition-colors"
                >
                  <PlayCircleIcon className="h-5 w-5 mr-2" />
                  Read Success Stories
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4 xs:space-x-6 pt-2 sm:pt-4 w-full overflow-x-auto">
                <div className="text-center flex-shrink-0">
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold">{stats.totalLearners}</div>
                  <div className="text-xs xs:text-sm text-primary-200">Students</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold">{stats.totalCourses}</div>
                  <div className="text-xs xs:text-sm text-primary-200">Live Courses</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold">{stats.certificates}</div>
                  <div className="text-xs xs:text-sm text-primary-200">Certificates</div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0 w-full">
              <div className="relative z-10 w-full">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning online"
                  className="rounded-lg shadow-2xl w-full h-64 xs:h-72 sm:h-80 lg:h-auto object-cover"
                />
              </div>
              <div className="absolute top-2 xs:top-4 right-2 xs:right-4 bg-white rounded-lg p-2 xs:p-4 shadow-lg">
                <div className="flex items-center space-x-1 xs:space-x-2">
                  <VideoCameraIcon className="h-4 xs:h-5 sm:h-6 w-4 xs:w-5 sm:w-6 text-red-500" />
                  <span className="text-xs xs:text-sm font-medium text-gray-900 whitespace-nowrap">Live Classes</span>
                </div>
              </div>
              <div className="absolute bottom-2 xs:bottom-4 left-2 xs:left-4 bg-white rounded-lg p-2 xs:p-4 shadow-lg">
                <div className="flex items-center space-x-1 xs:space-x-2">
                  <CheckCircleIcon className="h-4 xs:h-5 sm:h-6 w-4 xs:w-5 sm:w-6 text-green-500" />
                  <span className="text-xs xs:text-sm font-medium text-gray-900 whitespace-nowrap">1-on-1 Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 bg-gray-50 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Learn from industry experts with live interactive classes and personalized guidance
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div className="text-center p-4 sm:p-6">
              <div className="bg-red-100 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <VideoCameraIcon className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 text-red-600" />
              </div>
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">Live Interactive Classes</h3>
              <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                Real-time learning with expert instructors and live Q&A sessions
              </p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="bg-primary-100 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <UserGroupIcon className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 text-primary-600" />
              </div>
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">1-on-1 Sessions</h3>
              <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                Personalized guidance and mentoring from industry professionals
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="bg-green-100 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <AcademicCapIcon className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">Industry Certificates</h3>
              <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                Get recognized certificates to boost your career prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Zones Section */}
      <section className="py-12 sm:py-16 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Learning Zones
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Specialized courses designed for different career paths
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${encodeURIComponent(category.name)}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 text-center w-full"
              >
                <div className={`${category.color} rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-xl xs:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-base xs:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.coursesCount} courses</p>
                {category.id === 'technical' && (
                  <p className="text-xs text-gray-500 mt-1">By Cisco Engineers</p>
                )}
                {category.id === 'govt-exam' && (
                  <p className="text-xs text-gray-500 mt-1">By Govt Officers</p>
                )}
                {(category.id === 'communication' || category.id === 'ai-freelancing') && (
                  <p className="text-xs text-gray-500 mt-1">By Industry Experts</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 sm:py-16 bg-gray-50 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular Courses
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Join thousands of students in our most popular live courses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {featuredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Instructor Credentials */}
      <section className="py-12 sm:py-16 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Learn from the Best
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our instructors are industry professionals with real-world experience
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl xs:text-2xl">⚡</span>
              </div>
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">Cisco Engineers</h3>
              <p className="text-sm xs:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Learn networking from CCIE certified professionals with 15+ years at Cisco
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <div>✓ CCIE Certified</div>
                <div>✓ Industry Experience</div>
                <div>✓ Live Labs</div>
              </div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl xs:text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">Government Officers</h3>
              <p className="text-sm xs:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Exam preparation from retired IAS officers and civil service professionals
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <div>✓ IAS/IPS Officers</div>
                <div>✓ 20+ Years Experience</div>
                <div>✓ Proven Track Record</div>
              </div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl xs:text-2xl">🚀</span>
              </div>
              <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">Industry Experts</h3>
              <p className="text-sm xs:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Communication and freelancing skills from successful entrepreneurs and corporate leaders
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <div>✓ Corporate Experience</div>
                <div>✓ Successful Entrepreneurs</div>
                <div>✓ Real Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 overflow-x-hidden w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join our live classes with industry experts and get personalized guidance to achieve your career goals
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center w-full">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Start Learning Today
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-base sm:text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 