# Prototype CWDAI

## Description
Prototype CWDAI is an AI-driven crop analysis application that allows users to upload images or capture them using a webcam. The application processes the images using TensorFlow.js to classify crops as healthy, weeds, or pests, providing recommendations based on the analysis.

## Features
- Upload images for analysis.
- Capture images in real-time using a webcam.
- AI-based classification of crops using TensorFlow.js.
- User-friendly interface for easy interaction.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node package manager)

### Clone the Repository
```bash
git clone <YOUR_REPOSITORY_URL>
cd Prototype CWDAI
```

### Install Dependencies
```bash
npm install
```

## Usage

### Start the Backend Server
```bash
node server/index.js
```

### Start the React Application
```bash
npm start
```

### Access the Application
Open your browser and navigate to `http://localhost:3001` (or the port specified in your configuration).

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [TensorFlow.js](https://www.tensorflow.org/js) for AI model implementation.
- [OpenCV.js](https://opencv.org/opencv-js/) for image processing capabilities.
