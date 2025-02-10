import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Scan, Loader2, Bug, Sprout, Shield } from 'lucide-react';
import React, { useRef } from 'react';
import Webcam from 'react-webcam';

export default function TryItNow() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    multiple: false,
    onDrop: files => files[0] && handleImageUpload(files[0])
  });

  const handleImageUpload = async (uploadedFile: File) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', uploadedFile);

      const response = await fetch('http://localhost:5000/detect', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Server error');

      const analysisResult = await response.json();

      setFile(uploadedFile);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Image processing failed!');
    } finally {
      setLoading(false);
    }
  };

  const captureImage = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        fetch(imageSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], 'captured_image.jpg', { type: 'image/jpeg' });
            handleImageUpload(file);
          });
      }
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          AI Crop Analysis
        </h1>

        {/* Upload Zone */}
        <div 
          {...getRootProps()}
          className={`border-4 border-dashed rounded-2xl p-8 mb-12 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-green-600 bg-green-100' : 'border-green-400 hover:border-green-500'}`}
        >
          <input {...getInputProps()} />
          <Scan className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <p className="text-xl text-green-800">
            {isDragActive ? 'Drop image here' : 'Drag & drop crop image or click to select'}
          </p>
          <p className="text-sm text-green-600 mt-2">Supported formats: JPG, PNG</p>
        </div>

        {/* Webcam Capture */}
        <div className="text-center mb-12">
          <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="rounded-lg shadow-md" />
          <button onClick={captureImage} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Capture Image
          </button>
        </div>

        {/* Analysis Results */}
        {file && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="h-12 w-12 text-green-600 animate-spin mx-auto mb-4" />
                <p className="text-green-800 text-lg">Analyzing your crop image...</p>
              </div>
            ) : result && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  {result.type === 'pest' && <Bug className="h-8 w-8 text-red-600" />}
                  {result.type === 'weed' && <Shield className="h-8 w-8 text-yellow-600" />}
                  {result.type === 'healthy' && <Sprout className="h-8 w-8 text-green-600" />}
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                    {result.type} Detected ({result.confidence}% confidence)
                  </h2>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    AI Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3 text-green-700">
                        <span className="text-green-600">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <img 
                  src={URL.createObjectURL(file)} 
                  alt="Analyzed crop" 
                  className="rounded-lg shadow-md mt-6"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface AnalysisResult {
  type: 'pest' | 'weed' | 'healthy';
  confidence: number;
  recommendations: string[];
}
