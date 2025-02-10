import * as tf from "@tensorflow/tfjs";

console.log("TensorFlow.js version:", tf.version.tfjs);
console.log("TensorFlow.js is working!", tf.tensor([1, 2, 3, 4]).toString());
