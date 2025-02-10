declare module '@techstark/opencv-js' {
  interface CV {
    imread: (element: HTMLImageElement) => any;
    Mat: new () => any;
    cvtColor: (src: any, dst: any, code: number) => void;
    COLOR_RGBA2GRAY: number;
    resize: (src: any, dst: any, size: [number, number]) => void;
    INTER_LINEAR: number;
    [key: string]: any;
  }
  const cv: CV;
  export default cv;
}
