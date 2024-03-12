
import { resizeImage, grayscaleImage } from './index.js';

// Example usage
const inputFile = 'sunflower.jpg';
const resizedOutputFile = 'lion.jpg';
const grayscaleOutputFile = 'cat.jpg';

resizeImage(inputFile, resizedOutputFile, 300, 200)
  .then(() => console.log('Image resized successfully'))
  .catch(err => console.error('Error resizing image:', err));

grayscaleImage(inputFile, grayscaleOutputFile)
  .then(() => console.log('Image converted to grayscale successfully'))
  .catch(err => console.error('Error converting image to grayscale:', err));
