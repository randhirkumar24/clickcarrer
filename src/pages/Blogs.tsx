import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ClockIcon,
  TagIcon,
  UserIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { markdownBlogPosts } from '../utils/blogLoader';

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(markdownBlogPosts);

  const categories = Array.from(new Set(markdownBlogPosts.map(post => post.category)));
  const featuredPosts = markdownBlogPosts.filter(post => post.featured);

  React.useEffect(() => {
    let filtered = markdownBlogPosts;

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">
              Learning Hub
            </h1>
            <p className="text-lg xs:text-xl sm:text-2xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Expert insights, career guidance, and industry trends from our instructors and industry professionals
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-9 xs:pl-10 pr-4 py-3 xs:py-4 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter articles by category"
              className="px-4 py-3 xs:py-4 text-sm xs:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
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
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 xs:h-52 sm:h-56 object-cover"
                  />
                  <div className="p-4 xs:p-5 sm:p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-2.5 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm xs:text-base text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-4 text-xs xs:text-sm text-gray-500">
                      <div className="flex items-center space-x-3 xs:space-x-4">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="xs:text-right">{formatDate(post.publishDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-44 xs:h-48 sm:h-52 object-cover"
                  />
                  <div className="p-4 xs:p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2 xs:px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="inline-flex items-center px-2 xs:px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sm xs:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1 xs:gap-2 mb-4">
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
                    
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-3 text-xs xs:text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="xs:text-right">{formatDate(post.publishDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 rounded-full w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 text-gray-400" />
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-sm xs:text-base text-gray-600 mb-4">
                  Try adjusting your search or filters to find more articles.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="inline-flex items-center px-4 py-2 xs:px-6 xs:py-3 text-sm xs:text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 0 && filteredPosts.length >= 6 && (
          <div className="text-center mt-8 sm:mt-12">
            <button className="inline-flex items-center px-6 py-3 xs:px-8 xs:py-4 text-sm xs:text-base font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50 transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs; 