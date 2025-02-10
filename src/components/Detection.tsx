import React, { useState } from 'react';
import { Upload, Camera, Loader, Sprout, AlertTriangle } from 'lucide-react';

interface AnalysisResult {
  type: 'crop' | 'weed';
  name: string;
  confidence: number;
  recommendations: string[];
}

const Detection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    // Simulated analysis - in production, this would be an API call
    setTimeout(() => {
      const mockResults: AnalysisResult = {
        type: Math.random() > 0.5 ? 'crop' : 'weed',
        name: Math.random() > 0.5 ? 'Wheat Plant' : 'Dandelion',
        confidence: Math.random() * (0.99 - 0.85) + 0.85,
        recommendations: [
          'Apply organic fertilizer for better growth',
          'Monitor soil moisture levels',
          'Check for pest infestations regularly'
        ]
      };
      setAnalysisResult(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Real-Time Detection
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Upload an image or use your camera to detect crops and weeds instantly
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center transition-all duration-300 hover:border-green-500">
                  {selectedImage ? (
                    <div className="relative group">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="mx-auto max-h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-12 w-12 text-green-500 animate-bounce" />
                      <p className="text-gray-500">Drag and drop or click to upload</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Select Image
                  </label>
                </div>

                <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <Camera className="mr-2 h-5 w-5" />
                  Use Camera
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 transition-all duration-300">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Loader className="h-12 w-12 text-green-600 animate-spin" />
                    <p className="mt-4 text-lg font-medium text-gray-700">Analyzing image...</p>
                    <div className="w-full mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full animate-progress"></div>
                    </div>
                  </div>
                ) : analysisResult ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {analysisResult.type === 'crop' ? (
                          <Sprout className="h-6 w-6 text-green-600" />
                        ) : (
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        )}
                        <h3 className="text-xl font-semibold">
                          {analysisResult.type === 'crop' ? 'Crop Detected' : 'Weed Detected'}
                        </h3>
                      </div>
                      <span className="text-sm font-medium text-gray-500">
                        {(analysisResult.confidence * 100).toFixed(1)}% confidence
                      </span>
                    </div>
                    
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <p className="text-lg font-medium text-gray-800">{analysisResult.name}</p>
                      <div className="mt-4 space-y-2">
                        <h4 className="font-medium text-gray-700">Recommendations:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {analysisResult.recommendations.map((rec, index) => (
                            <li key={index} className="text-gray-600">{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {analysisResult.type === 'weed' && (
                      <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                        <h4 className="font-medium text-red-700">Treatment Options:</h4>
                        <ul className="mt-2 space-y-1 text-red-600">
                          <li>• Targeted herbicide application</li>
                          <li>• Manual removal recommended</li>
                          <li>• Consider organic weed control methods</li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <Sprout className="h-16 w-16 text-green-600 animate-pulse" />
                    <p className="text-gray-500 text-center">
                      Upload an image or use your camera to see detection results
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detection;