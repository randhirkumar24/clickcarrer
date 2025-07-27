import React from 'react';
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                Welcome to ClickCareer. These Terms and Conditions govern your use of our website and services. 
                By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using ClickCareer's website and services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Use License</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                Permission is granted to temporarily access the materials on ClickCareer's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Course Enrollment and Access</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                When you enroll in a course on ClickCareer, you agree to the following terms:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Course access is granted for the duration specified in the course description</li>
                <li>You may not share your account credentials with others</li>
                <li>Course materials are for your personal use only</li>
                <li>You may not redistribute or resell course content</li>
                <li>We reserve the right to modify course content at any time</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Payment Terms</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                All course fees are payable in advance. By purchasing a course, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Pay the full amount at the time of enrollment</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Accept that all fees are non-refundable except as specified in our refund policy</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. User Conduct</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                You agree not to use the service to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Use automated systems to access the service</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Intellectual Property</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                The content on ClickCareer, including but not limited to text, graphics, images, 
                videos, and course materials, is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your 
              use of the service, to understand our practices regarding the collection and use of your information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Disclaimers</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                The materials on ClickCareer's website are provided on an 'as is' basis. ClickCareer makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-600">
                Further, ClickCareer does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its website or otherwise 
                relating to such materials or on any sites linked to this site.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall ClickCareer or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use the materials on ClickCareer's website, even if ClickCareer or 
              a ClickCareer authorized representative has been notified orally or in writing of the possibility 
              of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on ClickCareer's website could include technical, typographical, or 
              photographic errors. ClickCareer does not warrant that any of the materials on its website 
              are accurate, complete, or current. ClickCareer may make changes to the materials contained 
              on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Links</h2>
            <p className="text-gray-600 mb-6">
              ClickCareer has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement 
              by ClickCareer of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">12. Modifications</h2>
            <p className="text-gray-600 mb-6">
              ClickCareer may revise these terms of service for its website at any time without notice. 
              By using this website you are agreeing to be bound by the then current version of these 
              Terms and Conditions of Use.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">13. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the 
              United States and you irrevocably submit to the exclusive jurisdiction of the courts in that 
              state or location.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">14. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600">
                <strong>Email:</strong> legal@clickcareer.com<br />
                <strong>Phone:</strong> +91 79038 17049<br />
                <strong>Address:</strong> 123 Learning Street, Education District, New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                These terms and conditions constitute a legally binding agreement between you and ClickCareer. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound 
                by these terms. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 