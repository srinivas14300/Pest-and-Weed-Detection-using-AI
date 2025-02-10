import { useState } from "react";
import { Users, Leaf, BarChart, MessageCircle } from "lucide-react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How accurate is the AI detection?',
      answer: 'Our AI model achieves 92% accuracy in controlled tests...'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support JPG, PNG, and WebP formats...'
    },
    {
      question: 'How long does analysis take?',
      answer: 'Typical analysis completes in 2-5 seconds...'
    },
    {
      question: 'Do you store uploaded images?',
      answer: 'Images are temporarily processed...'
    },
    {
      question: 'Can I use this for commercial farming?',
      answer: 'Yes, our enterprise plan supports...'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-700">
            About Our AI-Powered Solution
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Empowering farmers with real-time AI-based crop and weed detection for better yield.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center space-x-6">
            <Leaf className="h-16 w-16 text-green-600" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Precision Farming</h3>
              <p className="text-gray-600">
                AI-powered analysis ensures accurate crop and weed differentiation.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <BarChart className="h-16 w-16 text-green-600" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Smart analytics provide insights for improved agricultural decisions.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Users className="h-16 w-16 text-green-600" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Farmer-Friendly</h3>
              <p className="text-gray-600">
                Easy-to-use web platform designed for seamless accessibility.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <MessageCircle className="h-16 w-16 text-green-600" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Community Support</h3>
              <p className="text-gray-600">
                Engage with agricultural experts and fellow farmers for assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Meet Our Team</h3>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-emerald-50 p-2">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-green-600/80">
                    <circle cx="12" cy="9" r="3" fill="currentColor" />
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-3 8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1H9v-1z"/>
                  </svg>
                </div>
              </div>
              <h4 className="mt-4 text-xl font-semibold">Shivani</h4>
              <p className="text-gray-500">AI Engineer</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-emerald-50 p-2">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-green-600/80">
                    <circle cx="12" cy="9" r="3" fill="currentColor" />
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-3 8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1H9v-1z"/>
                  </svg>
                </div>
              </div>
              <h4 className="mt-4 text-xl font-semibold">Srinivas</h4>
              <p className="text-gray-500">Frontend Developer</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-emerald-50 p-2">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-green-600/80">
                    <circle cx="12" cy="9" r="3" fill="currentColor" />
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-3 8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1H9v-1z"/>
                  </svg>
                </div>
              </div>
              <h4 className="mt-4 text-xl font-semibold">Harsh</h4>
              <p className="text-gray-500">Agricultural Expert</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-bold text-green-800 mb-8">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 bg-white shadow-sm"
              >
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
