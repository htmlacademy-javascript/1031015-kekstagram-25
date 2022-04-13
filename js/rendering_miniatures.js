import { openFullSizeImage } from './drawing_full_size_image.js';

const renderMiniatures = (items) => {
  const templateFragment = document.querySelector('#picture').content; //Находим элемент с содержимом темплейта

  const template = templateFragment.querySelector('.picture'); //Во фрагменте находим нужный элемент

  const fragment = document.createDocumentFragment(); //Создаем вирптуальный ящик

  items.forEach((item) => {
    const element = template.cloneNode(true);
    const image = element.querySelector('.picture__img');
    const comments = element.querySelector('.picture__comments');
    const likes = element.querySelector('.picture__likes');
    const itemComments = item.comments;

    image.src = item.url;

    comments.textContent= itemComments.length;

    likes.textContent= item.likes;

    element.addEventListener('click', () => {
      openFullSizeImage(item);
    });

    fragment.appendChild(element);
  });

  const pictures = document.querySelector('.pictures');

  pictures.appendChild(fragment);
};

export { renderMiniatures };
