const renderMiniatures = (items) => {
  const templateFragment = document.querSelector('#picture').content; //Находим элемент с содержимом темплейта

  const template = templateFragment.querSelector('.picture'); //Во фрагменте находим нужный элемент

  const fragment = document.createDocumentFragment(); //Создаем вирптуальный ящик

  items.forEach((item) => {
    const element = template.cloneNode(true);
    const picture = element.querSelector('.picture__img');
    const comments = element.querySelector('.picture__coments');
    const likes = element.querySelector('.picture__likes');
    const itemComments = item.comments;

    picture.setAttribute('src', item.url);

    comments.textContent= itemComments.length;

    likes.textContent= item.likes;

    fragment.appendChild(element);
  });

  const pictures = document.querySelector('.pictures');

  pictures.appendChild(fragment);
};

export { renderMiniatures };
