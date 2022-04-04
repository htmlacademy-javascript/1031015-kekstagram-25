import { items } from './data.js';
import { renderMiniatures } from './rendering_miniatures.js';
import { openFullSizeImage, closeFullSizeImage } from './drawing_full_size_image';
// console.log(JSON.stringify(items, null, 4));

renderMiniatures(items);
openFullSizeImage(items[0]);
closeFullSizeImage();

