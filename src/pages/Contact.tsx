import { useTheme } from '../context/ThemeContext';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const { theme } = useTheme();
  const [mapUrl, setMapUrl] = React.useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119163247!2d-0.3817840219724494!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1712345678901');

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const newMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1`;
        setMapUrl(newMapUrl);
      }, (error) => {
        console.error("Error getting location:", error);
      });
    }
  }, []);

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
                    <p className={`${theme.text} font-medium`}>IARE</p>
                    <p className={`${theme.text} opacity-80`}>Dundigal<br/>Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <p className={`${theme.text} font-medium`}>Email Us</p>
                    <p className={`${theme.text} opacity-80`}>cwdai.farm@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 mt-1 text-green-600" />
                  <div>
                    <p className={`${theme.text} font-medium`}>Call Us</p>
                    <p className={`${theme.text} opacity-80`}>+91 0401000101</p>
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
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
