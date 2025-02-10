import React, { useState } from 'react';
import { predict } from '../utils/modelInference';
import { CLASS_NAMES } from '../utils/constants';
import { preprocessImage } from '../utils/imagePreprocessing';
import { logPrediction } from '../utils/logging';
import { getRecommendations } from '../utils/recommendations';
import * as tf from '@tensorflow/tfjs';
import * as cv from 'opencv.js';

interface Recommendation {
  tips?: string[];
  herbicides?: string[];
}

interface Prediction {
  heatmap: Blob;
  className: string;
  confidence: number;
}

const TestComponent = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageData = e.target?.result as string;
        setImage(imageData);
        const img = new Image();
        img.src = imageData;
        await new Promise((resolve) => (img.onload = resolve));
        const processedMat = preprocessImage(img);
        const canvas = document.createElement('canvas');
        cv.imshow(canvas, processedMat);
        const tensor = tf.browser.fromPixels(canvas).toFloat().expandDims(0);
        const result = await predict(tensor);
        
        // Convert tensor to array and get top prediction
        const predictions = (await result.array()) as number[][];
        const topPrediction = predictions[0].indexOf(Math.max(...predictions[0]));
        
        const heatmap = new Blob([await result.heatmap.arrayBuffer()], { type: 'image/png' });
        setPrediction({ heatmap, className: CLASS_NAMES[topPrediction], confidence: Math.max(...predictions[0]) });
        setRecommendations(getRecommendations(CLASS_NAMES[topPrediction]));
        logPrediction(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendFeedback = async (correct: boolean) => {
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        image,
        prediction,
        correct,
        timestamp: new Date().toISOString()
      })
    });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
      {!!prediction && (
        <div>
          <p>Prediction: {prediction.className}</p>
          <p>Confidence: {prediction.confidence.toFixed(2)}</p>
          {!!prediction.heatmap && (
            <div className="heatmap-overlay">
              <img
                src={URL.createObjectURL(prediction.heatmap)}
                alt="Class activation map"
                style={{ opacity: 0.5 }}
              />
            </div>
          )}
        </div>
      )}
      {recommendations && (
        <div>
          {recommendations.tips && (
            <div>
              <h3>Tips:</h3>
              <ul>
                {recommendations.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          {recommendations.herbicides && (
            <div>
              <h3>Herbicides:</h3>
              <ul>
                {recommendations.herbicides.map((herbicide, index) => (
                  <li key={index}>{herbicide}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {!!prediction && (
        <div className="feedback-buttons">
          <button onClick={() => sendFeedback(true)}>Correct</button>
          <button onClick={() => sendFeedback(false)}>Incorrect</button>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
