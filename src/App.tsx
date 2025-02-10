import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detection from "./components/Detection";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import TryItNow from "./pages/TryItNow";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { Leaf, Scan, Sprout, ArrowRight, PlayCircle, Quote } from "lucide-react";
import React from "react";

function App() {
  console.log("App component is rendering..."); // Debugging

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-emerald-50 flex flex-col items-center text-center px-4">
            
            {/* Hero Section */}
            <section className="w-full max-w-6xl py-24">
              <h1 className="text-5xl md:text-6xl font-extrabold text-green-800">
                Welcome, Farmers!
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                AI-driven crop & weed detection to boost farm productivity.  
                Protect your crops, detect diseases early, and get real-time insights.
              </p>
              <div className="mt-8 flex justify-center gap-6">
                <a 
                  href="/try-it" 
                  className="flex items-center px-8 py-4 bg-green-700 text-white rounded-full shadow-lg text-lg font-semibold transition hover:bg-green-800"
                >
                  Try It Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/about" 
                  className="flex items-center px-8 py-4 border-2 border-green-700 text-green-700 rounded-full text-lg font-semibold transition hover:bg-green-100"
                >
                  Learn More
                </a>
              </div>
            </section>

            {/* Feature Section */}
            <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-24">
              <FeatureCard 
                Icon={Scan} 
                title="Instant Crop Analysis" 
                description="Upload images and get AI-powered crop disease & weed detection."
                className="bg-blue-100"
              />
              <FeatureCard 
                Icon={Sprout} 
                title="Smart Farming Tips" 
                description="Get personalized AI-based recommendations for your crops."
                className="bg-red-100"
              />
              <FeatureCard 
                Icon={Leaf} 
                title="Localized Solutions" 
                description="Advice tailored to your region's climate & soil conditions."
                className="bg-yellow-100"
              />
            </section>

            {/* Live AI Demo */}
            <section className="w-full max-w-6xl py-16">
              <h2 className="text-4xl font-bold text-green-800">See AI in Action</h2>
              <p className="text-lg text-gray-600 mt-2">Upload an image and let AI detect crops and weeds instantly.</p>
              <a 
                href="/try-it"
                className="mt-6 inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-full text-lg font-semibold transition hover:bg-green-800"
              >
                Start Detection <PlayCircle className="ml-2 h-6 w-6" />
              </a>
            </section>

            {/* Testimonials */}
            <section className="w-full max-w-7xl py-16">
              <h2 className="text-4xl font-bold text-green-800 mb-6">What Farmers Say</h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Quote className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <p className="text-lg text-gray-700 italic">
                  "This AI tool has transformed the way we detect crop diseases. 
                  It's fast, accurate, and incredibly helpful!"
                </p>
                <p className="mt-4 font-semibold text-gray-900">- Ravi Kumar, Farmer from Telangana</p>
              </div>
            </section>

            {/* Blog & Insights */}
            <section className="w-full max-w-7xl py-16">
              <h2 className="text-4xl font-bold text-green-800 mb-6">Latest Insights</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <BlogCard 
                  title="5 Ways AI is Transforming Agriculture"
                  link="/blog/ai-agriculture"
                />
                <BlogCard 
                  title="Best Practices for Weed Management"
                  link="/blog/weed-management"
                />
                <BlogCard 
                  title="How Weather Affects Crop Growth"
                  link="/blog/weather-impact"
                />
              </div>
            </section>

          </div>
        }/>

        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/try-it" element={<TryItNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detection" element={<Detection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Reusable Components
interface FeatureCardProps {
  Icon: React.ComponentType;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ Icon, title, description, className }: FeatureCardProps) => (
  <div className={`bg-white p-8 rounded-xl shadow-md flex flex-col items-center ${className}`}>
    <Icon className="h-14 w-14 text-green-600 mb-4" />
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

interface BlogCardProps {
  title: string;
  link: string;
}

const BlogCard = ({ title, link }: BlogCardProps) => (
  <a href={link} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
  </a>
);

export default App;
