import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRightIcon, 
  CloudArrowUpIcon, 
  MagnifyingGlassIcon, 
  CheckCircleIcon, 
  LightBulbIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import React from 'react';

const steps = [
  {
    title: "Upload Image",
    description: "Farmer uploads a crop image through our secure portal",
    icon: CloudArrowUpIcon,
    illustration: "🌾"
  },
  {
    title: "AI Analysis",
    description: "Advanced algorithms process the image in real-time",
    icon: MagnifyingGlassIcon,
    illustration: "🤖"
  },
  {
    title: "Detection Result",
    description: "Instant classification of pests, weeds, or healthy crops",
    icon: CheckCircleIcon,
    illustration: "✅"
  },
  {
    title: "Smart Recommendations",
    description: "Personalized solutions based on detection results",
    icon: LightBulbIcon,
    illustration: "💡"
  },
  {
    title: "Actionable Insights",
    description: "Practical steps tailored to your farm's needs",
    icon: SparklesIcon,
    illustration: "📈"
  }
];

export default function HowItWorks() {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const touchStartRef = useRef<number | null>(null);

  // Auto-step change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle touch start (store initial touch position)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  // Handle touch movement (detect swipe direction)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartRef.current !== null) {
      const diff = e.touches[0].clientX - touchStartRef.current;
      if (diff > 50) {
        setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
      } else if (diff < -50) {
        setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }
      touchStartRef.current = null; // Reset after swipe
    }
  };

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${theme.gradientFrom} via-amber-25 ${theme.gradientTo} pt-[76px] md:pt-24 transition-all duration-300`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-green-800 mb-6 md:mb-10 text-center"
        >
          AI-Powered Crop Protection Process
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-6 rounded-xl transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white shadow-xl border-l-4 border-green-600'
                      : 'bg-green-50 hover:bg-green-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <step.icon className="h-8 w-8 text-green-600" />
                    <div className="text-left">
                      <p className="text-sm text-green-500">Step {index + 1}</p>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 ml-auto" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Animated Step Display */}
          <div className="bg-white rounded-2xl p-8 shadow-xl h-[500px] flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center space-y-6"
                aria-live="polite"
              >
                <span className="text-9xl inline-block animate-[bounce_2s_ease-in-out_infinite]">
                  {steps[activeStep].illustration}
                </span>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {steps[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Swipe Instruction for Mobile */}
        <div className="mt-8 text-center md:hidden">
          <p className="text-green-600 text-sm">
            Swipe left/right to navigate steps
          </p>
        </div>
      </div>
    </div>
  );
}
