import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

let model: mobilenet.MobileNet | null = null;

export const loadModel = async () => {
  if (!model) {
    model = await mobilenet.load({version: 2, alpha: 1.0});
  }
  return model;
};

export const classifyImage = async (imgElement: HTMLImageElement) => {
  if (!model) throw new Error('Model not loaded');
  return model.classify(imgElement);
};
