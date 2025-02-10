import cv from '@techstark/opencv-js';
import * as tf from '@tensorflow/tfjs';

export async function preprocessImage(imageElement: HTMLImageElement): Promise<ImageData> {
  // Read image from canvas or img element
  const mat = cv.imread(imageElement);

  // Resize image to 224x224
  const resizedImg = new cv.Mat();
  cv.resize(mat, resizedImg, new cv.Size(224, 224));

  // Convert to RGB
  const rgbImg = new cv.Mat();
  cv.cvtColor(resizedImg, rgbImg, cv.COLOR_RGBA2RGB);

  // Convert to Tensor
  const tensor = tf.browser.fromPixels(rgbImg);
  const normalized = tf.tidy(() => {
    const resized = tf.image.resizeBilinear(tensor, [224, 224]);
    return tf.image.perImageStandardization(resized);
  });

  // Cleanup OpenCV resources
  mat.delete();
  resizedImg.delete();
  rgbImg.delete();

  // Convert Tensor to ImageData
  const canvas = document.createElement('canvas');
  canvas.width = 224;
  canvas.height = 224;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context not available');

  const imgData = new ImageData(224, 224);
  const tensorData = await normalized.data();
  imgData.data.set(tensorData);

  ctx.putImageData(imgData, 0, 0);
  
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
