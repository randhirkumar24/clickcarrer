import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpenIcon, 
  ClockIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  ChartBarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { featuredCourses } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock enrolled courses (in real app, this would come from an API)
  const enrolledCourses = featuredCourses.slice(0, 3);

  const stats = {
    coursesEnrolled: 5,
    coursesCompleted: 2,
    hoursLearned: 24,
    certificatesEarned: 2
  };

  const recentActivity = [
    {
      id: 1,
      action: 'Completed',
      course: 'Introduction to Web Development',
      date: '2 hours ago',
      type: 'completion'
    },
    {
      id: 2,
      action: 'Started',
      course: 'Digital Marketing Fundamentals',
      date: '1 day ago',
      type: 'start'
    },
    {
      id: 3,
      action: 'Earned Certificate',
      course: 'Project Management Essentials',
      date: '3 days ago',
      type: 'certificate'
    }
  ];

  const recommendations = featuredCourses.slice(3, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Continue your learning journey and track your progress
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpenIcon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.coursesEnrolled}</div>
                <div className="text-sm text-gray-500">Courses Enrolled</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrophyIcon className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.coursesCompleted}</div>
                <div className="text-sm text-gray-500">Courses Completed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.hoursLearned}h</div>
                <div className="text-sm text-gray-500">Hours Learned</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AcademicCapIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.certificatesEarned}</div>
                <div className="text-sm text-gray-500">Certificates Earned</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Continue Learning</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Progress</span>
                              <span className="text-gray-700">65%</span>
                            </div>
                            <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-primary-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link
                            to={`/course/${course.id}`}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                          >
                            <PlayIcon className="h-4 w-4 mr-1" />
                            Continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/courses"
                    className="text-primary-600 hover:text-primary-500 font-medium"
                  >
                    Browse all courses →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'completion' ? 'bg-green-500' :
                        activity.type === 'certificate' ? 'bg-purple-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{activity.action}</span>
                          <span className="text-gray-500"> {activity.course}</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Streak */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Learning Streak</h2>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">7</div>
                <div className="text-sm text-gray-600">Days in a row</div>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-primary-600"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recommended for You</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendations.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-medium text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <span className="text-sm font-medium text-green-600">Free</span>
                    </div>
                    <div className="mt-3">
                      <Link
                        to={`/course/${course.id}`}
                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                      >
                        Enroll Free
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 