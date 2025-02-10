import { Mat, Size } from "@techstark/opencv-js";

declare module 'opencv.js' {
  interface CV {
    imread: (element: HTMLImageElement | HTMLCanvasElement) => any;
    Mat: any;
    Size: any;
    imshow: (canvasId: string, mat: any) => void;
    resize(src: any, dst: any, dsize: any, fx?: number, fy?: number, interpolation?: number): void;
    GaussianBlur(src: Mat, dst: Mat, ksize: Size, sigmaX: number, sigmaY?: number, borderType?: number): void;
    createCLAHE(clipLimit?: number, tileGridSize?: Size): CLAHE;
    [key: string]: any;
  }

  interface CLAHE {
    apply(src: Mat, dst: Mat): void;
  }

  const cv: CV;
  export default cv;
}
