import { useTheme } from '../context/ThemeContext';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-24 ${theme.background} transition-colors duration-300`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>Get in Touch with Us</h1>
        <p className={`text-xl ${theme.text} opacity-90 mb-12`}>Have questions? We're here to help farmers succeed.</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${theme.text}`}>Name</label>
              <input
                type="text"
                className={`mt-1 block w-full rounded-lg border ${theme.text} ${theme.background} transition-colors duration-300`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${theme.text}`}>Email</label>
              <input
                type="email"
                className={`mt-1 block w-full rounded-lg border ${theme.text} ${theme.background} transition-colors duration-300`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${theme.text}`}>Subject</label>
              <input
                type="text"
                className={`mt-1 block w-full rounded-lg border ${theme.text} ${theme.background} transition-colors duration-300`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${theme.text}`}>Message</label>
              <textarea
                rows={4}
                className={`mt-1 block w-full rounded-lg border ${theme.text} ${theme.background} transition-colors duration-300`}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg ${theme.button} text-white font-medium hover:opacity-90 transition-opacity duration-300`}
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${theme.background === 'bg-green-50' ? 'bg-green-100' : 'bg-blue-100'} transition-colors duration-300`}>
              <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <p className={`${theme.text} font-medium`}>Our Farm</p>
                    <p className={`${theme.text} opacity-80`}>123 Agricultural Road<br/>Farmington, CA 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <p className={`${theme.text} font-medium`}>Email Us</p>
                    <p className={`${theme.text} opacity-80`}>support@cwdai.farm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <p className={`${theme.text} font-medium`}>Call Us</p>
                    <p className={`${theme.text} opacity-80`}>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Facebook className="w-8 h-8 text-green-600 hover:text-green-700 cursor-pointer transition-colors" />
              <Twitter className="w-8 h-8 text-green-600 hover:text-green-700 cursor-pointer transition-colors" />
              <Linkedin className="w-8 h-8 text-green-600 hover:text-green-700 cursor-pointer transition-colors" />
            </div>

            {/* Map Embed */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119163247!2d-0.3817840219724494!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1712345678901"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
