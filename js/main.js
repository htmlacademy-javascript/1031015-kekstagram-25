import { items } from './data.js';
import { renderMiniatures } from './rendering_miniatures.js';
import { closeFullSizeImage } from './drawing_full_size_image.js';

renderMiniatures(items);

const closeImageButton = document.querySelector('.big-picture__cancel');

closeImageButton.addEventListener('click', closeFullSizeImage);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeFullSizeImage();
  }
});
