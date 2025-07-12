import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClockIcon, 
  TagIcon, 
  UserIcon,
  MagnifyingGlassIcon,
  FunnelIcon 
} from '@heroicons/react/24/outline';
import { blogPosts } from '../data/mockData';

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const featuredPosts = blogPosts.filter(post => post.featured);

  React.useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learning Hub
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Expert insights, career guidance, and industry trends from our instructors and industry professionals
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Posts */}
        {!searchTerm && !selectedCategory && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                        >
                          <TagIcon className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span className="truncate">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-primary-100 mb-6">
            Get the latest articles, tips, and insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 