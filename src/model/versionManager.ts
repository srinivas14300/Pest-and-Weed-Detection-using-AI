import * as tf from '@tensorflow/tfjs';

const MODEL_VERSIONS = {
  production: '1.2.0',
  experimental: '1.3.0-beta'
};

export const loadModelVersion = async (version: keyof typeof MODEL_VERSIONS) => {
  return tf.loadLayersModel(`/models/${MODEL_VERSIONS[version]}/model.json`);
};
