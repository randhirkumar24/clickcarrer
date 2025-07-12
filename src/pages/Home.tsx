import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon, StarIcon, UserGroupIcon, AcademicCapIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { featuredCourses, categories, stats } from '../data/mockData';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Live Online Courses with Expert Instructors
              </h1>
              <p className="text-xl md:text-2xl text-primary-100">
                Learn from Cisco Engineers, Government Officers, and Industry Experts. 
                Get personalized 1-on-1 sessions and advance your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Explore Live Courses
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-500 transition-colors"
                >
                  <PlayCircleIcon className="h-5 w-5 mr-2" />
                  Read Success Stories
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{stats.totalLearners}</div>
                  <div className="text-sm text-primary-200">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{stats.totalCourses}</div>
                  <div className="text-sm text-primary-200">Live Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{stats.certificates}</div>
                  <div className="text-sm text-primary-200">Certificates</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning online"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <VideoCameraIcon className="h-6 w-6 text-red-500" />
                  <span className="text-sm font-medium text-gray-900">Live Classes</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-sm font-medium text-gray-900">1-on-1 Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts with live interactive classes and personalized guidance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <VideoCameraIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Interactive Classes</h3>
              <p className="text-gray-600">
                Real-time learning with expert instructors and live Q&A sessions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1-on-1 Sessions</h3>
              <p className="text-gray-600">
                Personalized guidance and mentoring from industry professionals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Certificates</h3>
              <p className="text-gray-600">
                Get recognized certificates to boost your career prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Zones Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Learning Zones
            </h2>
            <p className="text-lg text-gray-600">
              Specialized courses designed for different career paths
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${encodeURIComponent(category.name)}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
              >
                <div className={`${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of students in our most popular live courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Instructor Credentials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn from the Best
            </h2>
            <p className="text-lg text-gray-600">
              Our instructors are industry professionals with real-world experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cisco Engineers</h3>
              <p className="text-gray-600 mb-4">
                Learn networking from CCIE certified professionals with 15+ years at Cisco
              </p>
              <div className="text-sm text-gray-500">
                <div>✓ CCIE Certified</div>
                <div>✓ Industry Experience</div>
                <div>✓ Live Labs</div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Officers</h3>
              <p className="text-gray-600 mb-4">
                Exam preparation from retired IAS officers and civil service professionals
              </p>
              <div className="text-sm text-gray-500">
                <div>✓ IAS/IPS Officers</div>
                <div>✓ 20+ Years Experience</div>
                <div>✓ Proven Track Record</div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Experts</h3>
              <p className="text-gray-600 mb-4">
                Communication and freelancing skills from successful entrepreneurs and corporate leaders
              </p>
              <div className="text-sm text-gray-500">
                <div>✓ Corporate Experience</div>
                <div>✓ Successful Entrepreneurs</div>
                <div>✓ Real Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.totalLearners}</div>
              <div className="text-primary-200">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.totalCourses}</div>
              <div className="text-primary-200">Live Courses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stats.certificates}</div>
              <div className="text-primary-200">Certificates Issued</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our live classes with industry experts and get personalized guidance to achieve your career goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Start Learning Today
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
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