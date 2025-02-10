import * as tf from '@tensorflow/tfjs';
import { createVerificationModel } from './verificationModel';
import { generateGradCAM } from '../utils/visualization';

export const runInference = async (preprocessedTensor: tf.Tensor) => {
  const baseModel = await tf.loadLayersModel('https://storage.googleapis.com/plantvillage-model/mobilenet_v2/model.json');
  const newOutput = tf.layers.dense({
    units: 2,
    activation: 'softmax',
    name: 'custom_output'
  }).apply(baseModel.getLayer('global_average_pooling2d').output) as tf.SymbolicTensor;

  const model = tf.model({
    inputs: baseModel.inputs,
    outputs: newOutput
  });

  model.compile({
    optimizer: tf.train.adam(0.0001),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });

  const verificationModel = createVerificationModel();

  // Main prediction
  const prediction = model.predict(preprocessedTensor) as tf.Tensor;

  // Verification check
  const verificationFeatures = model.getLayer('custom_output').output;
  const verificationPred = verificationModel.predict(verificationFeatures);

  // Visual validation
  const heatmap = await generateGradCAM(model, preprocessedTensor);

  return {
    primaryPrediction: prediction,
    verificationCheck: verificationPred,
    heatmap
  };
};
