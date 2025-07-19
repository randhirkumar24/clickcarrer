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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-4 text-base border-0 bg-white rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:shadow-md outline-none transition-all placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter articles by category"
                className="appearance-none bg-white px-6 py-4 pr-12 text-base border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:shadow-md outline-none transition-all cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {!searchTerm && !selectedCategory && (
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Featured Articles</h2>
                <p className="text-gray-600">Handpicked insights from our expert instructors</p>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.slice(0, 2).map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm text-primary-800 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      <Link
                        to={`/blog/${post.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2">
                            <UserIcon className="h-4 w-4 text-primary-600" />
                          </div>
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1 text-gray-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(post.publishDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
            </h2>
            {filteredPosts.length > 0 && (
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-primary-800 shadow-sm">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-400/90 backdrop-blur-sm text-yellow-900 shadow-sm">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      <Link
                        to={`/blog/${post.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          <TagIcon className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-gray-100 text-gray-500">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2">
                            <UserIcon className="h-3 w-3 text-primary-600" />
                          </div>
                          <span className="truncate font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1 text-gray-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(post.publishDate)}</span>
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
          <div className="text-center mt-10">
            <button className="group inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Load More Articles
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs; 