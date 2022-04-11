import { items } from '../js/data.js';
import { renderMiniatures } from '../js/rendering_miniatures';
import { openFullSizeImage, closeFullSizeImage } from '../js/drawing_full_size_image';
// console.log(JSON.stringify(items, null, 4));

renderMiniatures(items);
openFullSizeImage(items[0]);
closeFullSizeImage();

