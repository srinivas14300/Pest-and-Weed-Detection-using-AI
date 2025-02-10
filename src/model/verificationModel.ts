import * as tf from '@tensorflow/tfjs';

export const createVerificationModel = () => {
  return tf.sequential({
    layers: [
      tf.layers.dense({
        units: 128,
        activation: 'relu',
        inputShape: [1024]
      }),
      tf.layers.dense({
        units: 2,
        activation: 'softmax'
      })
    ]
  });
};
