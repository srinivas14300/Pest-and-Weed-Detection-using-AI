import * as tf from '@tensorflow/tfjs';

export const augmentImage = (img: tf.Tensor) => {
  return tf.tidy(() => {
    let processed = img;
    
    // Random rotation
    if (Math.random() > 0.5) {
      const radians = tf.scalar(Math.random() * 0.2 - 0.1);
      processed = tf.image.rotateWithOffset(processed, radians);
    }

    // Random brightness/contrast
    processed = tf.image.adjustBrightness(processed, 0.1);
    processed = tf.image.adjustContrast(processed, 1);

    return processed;
  });
};
