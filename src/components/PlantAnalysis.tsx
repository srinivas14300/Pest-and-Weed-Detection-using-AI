import { useState } from 'react';
import { analyzePlantImage } from '../api/mockPlantAPI';
import React from 'react';

interface AnalysisResult {
  species: string;
  healthStatus: string;
  confidence: number;
  timestamp: string;
}

interface FileReaderEventTarget extends EventTarget {
  result: string | ArrayBuffer | null;
}

const PlantAnalysis = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = (e.target as FileReaderEventTarget).result;
        if (typeof result === 'string') {
          setImagePreview(result);
        }
      };
      reader.readAsDataURL(file);

      try {
        console.log('Processing file:', file);
        const result = await analyzePlantImage(file);
        setAnalysisResult(result);
      } catch (error) {
        console.error('Error processing image:', error);
        // Optionally, you can set an error state to display an error message in the UI
      }
    }
  };

  return (
    <div className="analysis-container">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Upload preview" />
        </div>
      )}
      {analysisResult && (
        <div className="results">
          <h3>Analysis Results</h3>
          <p>Species: {analysisResult.species}</p>
          <p>Health: {analysisResult.healthStatus}</p>
          <p>Confidence: {(analysisResult.confidence * 100).toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export { PlantAnalysis };
