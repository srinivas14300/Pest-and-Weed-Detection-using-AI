import { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import React from 'react';

interface MockAnalysisResult {
  cropType: string;
  weedType: string;
  healthStatus: 'healthy' | 'stressed' | 'diseased';
  severity: number;
  treatmentOptions: string[];
}

const TryItNow = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [result, setResult] = useState<MockAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const wsToken = typeof __WS_TOKEN__ !== 'undefined' ? __WS_TOKEN__ : 'placeholder_token';

  const handleImageUpload = (uploadedFile: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setImageSrc(e.target?.result as string);
    reader.readAsDataURL(uploadedFile);
  };

  const analyzeImage = async () => {
    if (!imageRef.current) return;

    setLoading(true);
    // Simulate static analysis results
    const mockResult: MockAnalysisResult = {
      cropType: 'Corn',
      weedType: 'Crabgrass',
      healthStatus: 'healthy',
      severity: 1,
      treatmentOptions: ['Watering', 'Fertilizing'],
    };
    // Simulate a delay for loading
    setTimeout(() => {
      setResult(mockResult);
      setLoading(false);
    }, 2000); // Simulating a 2-second delay for analysis
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold text-green-800 mb-6">AI Crop & Weed Analysis</h2>
        
        {/* Image Upload Section */}
        <div className="mb-8">
          <input 
            type="file" 
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
            className="mb-4"
          />
          
          {imageSrc && (
            <div className="relative">
              <img 
                ref={imageRef}
                src={imageSrc} 
                alt="Uploaded crop"
                className="max-h-96 object-contain mx-auto rounded-lg border-2 border-green-200"
              />
              
              <button 
                onClick={analyzeImage}
                disabled={loading}
                className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-green-300 transition-colors"
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">🌀</span>
                    Analyzing...
                  </span>
                ) : 'Analyze Image'}
              </button>
            </div>
          )}
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Detection Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white p-3 rounded">
                <span>Crop Type:</span>
                <span className="font-semibold text-green-700">{result.cropType}</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded">
                <span>Weed Type:</span>
                <span className="font-semibold text-green-700">{result.weedType}</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded">
                <span>Health Status:</span>
                <span className="font-semibold text-green-700">{result.healthStatus}</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded">
                <span>Treatment Options:</span>
                <span className="font-semibold text-green-700">{result.treatmentOptions.join(', ')}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TryItNow;
