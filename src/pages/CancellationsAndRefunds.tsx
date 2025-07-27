import React from 'react';
import { 
  ArrowPathIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const CancellationsAndRefunds: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellations and Refunds</h1>
          <p className="text-xl text-gray-600">
            Our commitment to your satisfaction with our courses
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                At ClickCareer, we want you to be completely satisfied with your learning experience. 
                We understand that sometimes a course may not meet your expectations, and we're here to help.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">30-Day Money-Back Guarantee</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Refund Available</h3>
                  <p className="text-gray-600">
                    If you're not satisfied with your course within 30 days of purchase, 
                    we'll provide a full refund, no questions asked.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ClockIcon className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Window</h3>
                  <p className="text-gray-600">
                    You have 30 days from the date of purchase to request a refund. 
                    After this period, refunds are not available.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Refund Eligibility</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Eligible for Refund</h3>
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>Course purchased within the last 30 days</li>
                  <li>No more than 25% of course content completed</li>
                  <li>Valid reason for dissatisfaction</li>
                  <li>First-time refund request for the course</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Not Eligible for Refund</h3>
                <ul className="list-disc list-inside text-red-700 space-y-2">
                  <li>More than 30 days since purchase</li>
                  <li>More than 25% of course content completed</li>
                  <li>Certificate already issued</li>
                  <li>Previous refund already processed for the same course</li>
                  <li>Violation of our terms of service</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Request a Refund</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Step-by-Step Process</h3>
                <ol className="list-decimal list-inside text-blue-700 space-y-2">
                  <li>Contact our support team at work.clickcareer@gmail.com</li>
                  <li>Include your order number and course name</li>
                  <li>Provide a brief explanation of why you're requesting a refund</li>
                  <li>Our team will review your request within 2-3 business days</li>
                  <li>If approved, refund will be processed to your original payment method</li>
                  <li>You'll receive a confirmation email once the refund is processed</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Refund Processing</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Time</h3>
                  <p className="text-gray-600 mb-4">
                    Once your refund is approved, processing times vary by payment method:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                    <li><strong>PayPal:</strong> 3-5 business days</li>
                    <li><strong>Bank Transfer:</strong> 7-14 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What Happens After Refund</h3>
                  <p className="text-gray-600 mb-4">
                    Once your refund is processed:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Your course access will be revoked</li>
                    <li>Any downloaded materials should be deleted</li>
                    <li>Certificate (if issued) will be invalidated</li>
                    <li>You'll receive a confirmation email</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Course Cancellations</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Before Course Starts</h3>
                <p className="text-gray-600 mb-4">
                  If you need to cancel your enrollment before the course begins:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Full refund available up to 7 days before course start date</li>
                  <li>50% refund available 3-7 days before course start date</li>
                  <li>No refund available within 3 days of course start date</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">After Course Starts</h3>
                <p className="text-gray-600 mb-4">
                  Once the course has begun, cancellations follow our standard refund policy:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>30-day money-back guarantee applies</li>
                  <li>Must have completed less than 25% of course content</li>
                  <li>Valid reason required for cancellation</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Special Circumstances</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Technical Issues</h3>
                <p className="text-yellow-700">
                  If you experience technical difficulties that prevent you from accessing or completing 
                  your course, we'll work with you to resolve the issue or provide a refund.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Course Discontinuation</h3>
                <p className="text-purple-700">
                  If we discontinue a course you've purchased, we'll offer you a full refund or 
                  the option to transfer to an equivalent course.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Instructor Changes</h3>
                <p className="text-green-700">
                  If there's a significant instructor change that affects course quality, 
                  we'll offer you a refund or course transfer option.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                For refund requests or questions about our cancellation policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> work.clickcareer@gmail.com</p>
                <p><strong>Phone:</strong> +91 79038 17049</p>
                <p><strong>Response Time:</strong> Within 24-48 hours</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ExclamationTriangleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-blue-700">
                This refund policy is designed to ensure your satisfaction while maintaining the integrity 
                of our educational platform. We reserve the right to modify this policy with notice, 
                but any changes will not affect refund requests made before the policy update.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationsAndRefunds; 