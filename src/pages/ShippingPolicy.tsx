import React from 'react';
import { 
  TruckIcon, 
  ClockIcon, 
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-xl text-gray-600">
            Information about our digital delivery and physical materials shipping
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Digital Course Delivery</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GlobeAltIcon className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Access</h3>
                  <p className="text-gray-600">
                    All our courses are delivered digitally. Upon successful payment, 
                    you'll receive immediate access to your course materials through our learning platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ClockIcon className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Access</h3>
                  <p className="text-gray-600">
                    Once enrolled, you have lifetime access to your course content, 
                    including any future updates and improvements.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Physical Materials (When Applicable)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <TruckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Information</h3>
                  <p className="text-gray-600 mb-4">
                    For courses that include physical materials (books, certificates, etc.), 
                    we offer the following shipping options:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li><strong>Standard Shipping:</strong> 3-5 business days</li>
                    <li><strong>Express Shipping:</strong> 1-2 business days</li>
                    <li><strong>Same Day Delivery:</strong> Available in select metro cities</li>
                  </ul>
                </div>
              </div>

                          <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Costs</h3>
                <p className="text-gray-600 mb-4">
                  Shipping costs vary based on your location and selected shipping method:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Domestic (India):</strong> ₹99 - ₹299</li>
                  <li><strong>International:</strong> ₹799 - ₹1,999</li>
                  <li><strong>Free Shipping:</strong> Available on orders over ₹2,999</li>
                </ul>
              </div>
            </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Destinations</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Domestic Shipping</h3>
                <p className="text-gray-600 mb-4">
                  We ship to all states and union territories across India. 
                  Shipping times may vary for remote locations.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Metro Cities: 2-4 business days</li>
                  <li>Tier 2 Cities: 3-5 business days</li>
                  <li>Rural Areas: 5-7 business days</li>
                  <li>North East & Remote Areas: 7-10 business days</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">International Shipping</h3>
                <p className="text-gray-600 mb-4">
                  We ship to most countries worldwide. International shipping times 
                  and costs vary by destination.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>SAARC Countries: 7-10 business days</li>
                  <li>Middle East: 8-12 business days</li>
                  <li>Europe & Americas: 12-18 business days</li>
                  <li>Asia Pacific: 10-15 business days</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Processing</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Time</h3>
                <p className="text-gray-600">
                  Orders are typically processed within 1-2 business days. 
                  You'll receive a confirmation email with tracking information 
                  once your order ships.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tracking Your Order</h3>
                <p className="text-gray-600">
                  Once your order ships, you'll receive a tracking number via email. 
                  You can also track your order through your account dashboard.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Issues & Returns</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Damaged or Lost Packages</h3>
                <p className="text-gray-600 mb-4">
                  If your package arrives damaged or is lost in transit, please contact our 
                  customer support team within 48 hours of delivery (or expected delivery date).
                </p>
                <p className="text-gray-600">
                  We'll work with the shipping carrier to resolve the issue and ensure 
                  you receive your materials in good condition.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Address Changes</h3>
                <p className="text-gray-600">
                  If you need to change your shipping address, please contact us within 
                  24 hours of placing your order. Changes made after this time may result 
                  in additional shipping charges.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Undeliverable Packages</h3>
                <p className="text-gray-600">
                  If a package is returned to us as undeliverable, we'll contact you to 
                  confirm your address and reship at your expense. Please ensure your 
                  shipping address is complete and accurate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Shipping?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our shipping policy or need assistance with your order, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Contact Support
            </a>
            <a
              href="mailto:work.clickcareer@gmail.com"
              className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Email Us
            </a>
            <a
              href="tel:+91-98765-43210"
              className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy; 