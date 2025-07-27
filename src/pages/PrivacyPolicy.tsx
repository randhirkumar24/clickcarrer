import React from 'react';
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  LockClosedIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                At ClickCareer, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our website and services.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Course preferences and learning history</li>
                  <li>Communications with our support team</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  When you use our website, we automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, interactions)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and analytics data</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. How We Use Your Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Provision</h3>
                    <p className="text-gray-600">
                      To provide and maintain our educational services, process payments, 
                      and deliver course content to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <EyeIcon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalization</h3>
                    <p className="text-gray-600">
                      To personalize your learning experience and recommend relevant courses 
                      based on your interests and progress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Safety</h3>
                    <p className="text-gray-600">
                      To protect against fraud, ensure platform security, and maintain 
                      the integrity of our services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LockClosedIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                    <p className="text-gray-600">
                      To communicate with you about your account, course updates, 
                      and important service announcements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">We Do Not Sell Your Data</h3>
                <p className="text-green-700">
                  We do not sell, trade, or rent your personal information to third parties. 
                  Your privacy is our priority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited Sharing</h3>
                <p className="text-gray-600 mb-4">
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who help us operate our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Data Security</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h3>
                  <p className="text-gray-600 mb-4">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h3>
                  <p className="text-gray-600 mb-4">
                    We retain your information only as long as necessary:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Account data: Until account deletion</li>
                    <li>Course progress: For educational purposes</li>
                    <li>Payment information: As required by law</li>
                    <li>Analytics data: Up to 2 years</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Your Rights and Choices</h2>
            
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Control</h3>
                  <p className="text-gray-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Access your personal information</li>
                    <li>Update or correct your data</li>
                    <li>Request deletion of your account</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Download your data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Preferences</h3>
                  <p className="text-gray-600 mb-4">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Block or delete cookies</li>
                    <li>Set cookie preferences</li>
                    <li>Clear browsing data</li>
                    <li>Use incognito/private browsing</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Cookies and Tracking</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Essential Cookies</h4>
                    <p className="text-blue-700 text-sm">
                      Required for basic website functionality and security.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Functional Cookies</h4>
                    <p className="text-green-700 text-sm">
                      Enhance user experience and remember your preferences.
                    </p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Analytics Cookies</h4>
                    <p className="text-yellow-700 text-sm">
                      Help us understand how visitors use our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Third-Party Services</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party services. We are not responsible for 
                the privacy practices of these external sites. We encourage you to review their 
                privacy policies before providing any personal information.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services We Use</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Payment Processors:</strong> Stripe, PayPal for secure payments</li>
                  <li><strong>Analytics:</strong> Google Analytics for website insights</li>
                  <li><strong>Email Services:</strong> SendGrid for communications</li>
                  <li><strong>Hosting:</strong> AWS for secure data storage</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Children's Privacy</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-600">
                Our services are not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If you are a parent 
                or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. International Data Transfers</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws and that 
                appropriate safeguards are in place to protect your information.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Changes to This Policy</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" 
                date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Contact Us</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> work.clickcareer@gmail.com</p>
                <p><strong>Phone:</strong> +91 79038 17049</p>
                <p><strong>Address:</strong> 5th Floor, AIC, IIT BHU, Varanasi, Uttar Pradesh, India</p>
                <p><strong>Data Protection Officer:</strong> dpo@clickcareer.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ExclamationTriangleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Your Privacy Matters</h3>
              <p className="text-blue-700">
                We are committed to protecting your privacy and being transparent about how we collect, 
                use, and protect your information. If you have any concerns about your privacy, 
                please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 