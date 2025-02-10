import * as tf from '@tensorflow/tfjs';

const loadModel = async () => {
  const model = await tf.loadLayersModel('path/to/your/model.json');
  return model;
};

export interface PredictionResult {
  image: any;
  className: string;
  confidence: number;
}

export async function predict(imageTensor: tf.Tensor): Promise<tf.Tensor> {
  const model = await loadModel();
  return model.predict(imageTensor) as tf.Tensor;
}
