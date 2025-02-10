import { PredictionResult } from './modelInference';

const logPrediction = (result: PredictionResult) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    className: result.className,
    confidence: result.confidence,
    image: result.image,
  };
  console.log('Prediction Log:', logEntry);
};

export { logPrediction };
