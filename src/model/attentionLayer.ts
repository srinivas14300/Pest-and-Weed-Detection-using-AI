import * as tf from '@tensorflow/tfjs';

export class SpatialAttention extends tf.layers.Layer {
  static className = 'SpatialAttention';

  build(inputShape: tf.Shape) {
    this.addWeight('attention_weights', [1, 1, inputShape[3]], tf.initializers.glorotUniform());
  }
  addWeight(arg0: string, arg1: any[], arg2: any) {
    throw new Error('Method not implemented.');
  }

  call(inputs: tf.Tensor) {
    const weights = tf.sigmoid(this.weights[0].read());
    return tf.mul(inputs, weights);
  }
}

tf.serialization.registerClass(SpatialAttention);
