import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <AcademicCapIcon className="h-8 w-8 text-primary-400" />
              <span className="text-xl xs:text-2xl font-bold">ClickCarrer</span>
            </div>
            <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
              Live online courses with expert instructors. Learn from industry professionals 
              with personalized 1-on-1 sessions and advance your career.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Learning Zones */}
          <div className="space-y-4">
            <h3 className="text-base xs:text-lg font-semibold">Learning Zones</h3>
            <ul className="space-y-2 text-sm xs:text-base">
              <li><Link to="/courses?category=Technical Zone" className="text-gray-300 hover:text-white transition-colors">Technical Zone</Link></li>
              <li><Link to="/courses?category=Govt Exam Zone" className="text-gray-300 hover:text-white transition-colors">Govt Exam Zone</Link></li>
              <li><Link to="/courses?category=Communication Zone" className="text-gray-300 hover:text-white transition-colors">Communication Zone</Link></li>
              <li><Link to="/courses?category=AI & Freelancing Zone" className="text-gray-300 hover:text-white transition-colors">AI & Freelancing Zone</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Learning Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-base xs:text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm xs:text-base">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-base xs:text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm xs:text-base">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Student Success</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Affiliate Program</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Mobile App</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Partnerships</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm xs:text-base text-gray-400">
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
            <div className="text-sm xs:text-base text-gray-400">
              <p>&copy; 2025 ClickCarrer. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 