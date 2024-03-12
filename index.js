
import sharp from 'sharp';

export function resizeImage(inputFile, outputFile, width, height) {
  return sharp(inputFile)
    .resize(width, height)
    .toFile(outputFile);
}

export function grayscaleImage(inputFile, outputFile) {
  return sharp(inputFile)
    .grayscale()
    .toFile(outputFile);
}
