const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

const openFullSizeImage = (item) => {
  bigPicture.classList.remove('hidden');

  const picture = document.querySelector('.big-picture__img img');

  picture.setAttribute('src', item.url);

  const likesCount = document.querySelector('.likes-count');

  likesCount.textContent = item.likes;

  const commentsCount = document.querySelector('.comments-count');

  commentsCount.textContent = item.comments.length;

  const socialCaption = document.querySelector('.social__caption');

  socialCaption.textContent = item.description;

  const socialComments = document.querySelector('.social__comments');

  socialComments.innerHTML = '';

  item.comments.forEach((comment) => {
    const element = document.createElement('li');

    element.classList.add('social__comment');

    const image = document.createElement('img');

    image.classList.add('social__picture');
    image.setAttribute('src', comment.avatar);
    image.setAttribute('alt', comment.name);
    image.setAttribute('width', '35');
    image.setAttribute('height', '35');

    element.appendChild(image);

    const text = document.createElement('p');

    text.classList.add('social__text');

    text.textContent = comment.message;

    element.appendChild(text);

    socialComments.appendChild(element);
  });

  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

};

const closeFullSizeImage = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('hidden');
};

export {
  openFullSizeImage,
  closeFullSizeImage,
};
