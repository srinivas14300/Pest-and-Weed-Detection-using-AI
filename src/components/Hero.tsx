import { ArrowRight, Leaf, LeafyGreen, Scan, Sprout } from "lucide-react";
import React from "react";
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute w-96 h-96 top-48 right-48 bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        <div className="absolute w-96 h-96 bottom-48 left-48 bg-teal-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <LeafyGreen className="h-12 w-12 text-green-600 animate-bounce" />
          <Sprout className="h-12 w-12 text-emerald-600 animate-bounce delay-1000" />
          <Leaf className="h-12 w-12 text-teal-600 animate-bounce delay-2000" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          <span className="block">Intelligent Crop &</span>
          <span className="block">Weed Detection</span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Harness the power of AI to identify and manage crops and weeds in real-time. 
          Enhance your agricultural productivity with precision technology.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#detection"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Try It Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-green-600 border-2 border-green-600 bg-white hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Learn More
            <Scan className="ml-2 h-5 w-5 animate-pulse" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
