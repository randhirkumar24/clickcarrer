import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  UserCircleIcon,
  ChevronDownIcon,
  AcademicCapIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };



  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white text-sm py-2 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <span className="inline">✓ 25,000+ Students</span>
            <span>✓ 78+ Live Courses</span>
            <span className="hidden sm:inline">✓ Expert Instructors</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <Link to="#" className="hover:text-primary-200 transition-colors">Download App</Link>
            <Link to="#" className="hover:text-primary-200 transition-colors">For Business</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
              <span className="text-xl sm:text-2xl font-bold text-primary-600">ClickCarrer</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-6 xl:mx-8">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses, subjects, or skills..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Courses
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blogs
            </Link>
            <Link to="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              For Business
            </Link>
          </nav>

          {/* User Authentication - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center space-x-3 ml-8 lg:ml-12">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="hidden lg:block font-medium">{user.name}</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary px-4 py-2 text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button - Always visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors ml-2"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg w-full overflow-x-hidden">
          <div className="px-4 pt-4 pb-6 space-y-1 w-full">
            {/* Mobile Search */}
            <div className="relative mb-6 w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-base"
              />
            </div>
            
            {/* Mobile Navigation Links */}
            <Link
              to="/courses"
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors w-full"
              onClick={closeMobileMenu}
            >
              <span>Courses</span>
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
            

            
            <Link
              to="/blogs"
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors w-full"
              onClick={closeMobileMenu}
            >
              <span>Blogs</span>
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
            
            <Link
              to="#"
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors w-full"
              onClick={closeMobileMenu}
            >
              <span>For Business</span>
              <ChevronRightIcon className="h-5 w-5" />
            </Link>

            {/* Mobile User Section */}
            {user ? (
              <div className="border-t border-gray-200 pt-4 mt-4 w-full">
                <div className="flex items-center px-4 py-3 space-x-3 w-full">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-1 w-full">
                  <Link
                    to="/dashboard"
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors w-full"
                    onClick={closeMobileMenu}
                  >
                    <span>Dashboard</span>
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors w-full"
                    onClick={closeMobileMenu}
                  >
                    <span>Profile</span>
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <span>Logout</span>
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-3 w-full">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 