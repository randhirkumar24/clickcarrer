import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ClockIcon, 
  TagIcon, 
  UserIcon,
  ArrowLeftIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { blogPosts } from '../data/mockData';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <p className="text-gray-600 mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/blogs" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author and Date Info */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.authorRole}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-gray max-w-none mb-8">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s*/, '');
                  
                  switch (level) {
                    case 1:
                      return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{text}</h1>;
                    case 2:
                      return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{text}</h2>;
                    case 3:
                      return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-4 mb-2">{text}</h3>;
                    default:
                      return <h4 key={index} className="text-lg font-medium text-gray-900 mt-3 mb-2">{text}</h4>;
                  }
                } else if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="text-gray-700 ml-4">
                      {paragraph.replace(/^-\s*/, '')}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    <TagIcon className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{post.author}</div>
                  <div className="text-sm text-gray-600 mb-2">{post.authorRole}</div>
                  <p className="text-sm text-gray-700">
                    An expert in their field with years of practical experience. 
                    Passionate about sharing knowledge and helping others succeed in their careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link 
                        to={`/blog/${relatedPost.id}`} 
                        className="hover:text-primary-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-primary-100 mb-6">
            Join thousands of students and start your journey with our expert-led courses
          </p>
          <Link
            to="/courses"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 