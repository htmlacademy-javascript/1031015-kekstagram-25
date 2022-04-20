const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeImageButton = document.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
let itemComments = [];
let commentsOffset = 0;
const commentsLimit = 5;

const closeFullSizeImage = ({ key }) => {
  if (!key || key === 'Escape') {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');

    closeImageButton.removeEventListener('click', closeFullSizeImage);
    document.removeEventListener('keydown', closeFullSizeImage);
  }
};

const generateComment = (comment) => {
  const element = document.createElement('li');

  element.classList.add('social__comment');

  const image = document.createElement('img');

  image.classList.add('social__picture');
  image.src = comment.avatar;
  image.alt = comment.name;
  image.width = '35';
  image.height = '35';

  element.appendChild(image);

  const text = document.createElement('p');

  text.classList.add('social__text');

  text.textContent = comment.message;

  element.appendChild(text);

  return element;
};

const updateCommentsCount = () => {
  const max = commentsOffset + commentsLimit;
  const currentCount = itemComments.length < max ? itemComments.length : max;

  socialCommentCount.textContent = `${currentCount} из ${itemComments.length} комментариев`;
};

const loadComments = () => {
  const fragment = document.createDocumentFragment();

  for (let i = commentsOffset; i < commentsOffset + commentsLimit; i++) {
    const comment = itemComments[i];

    if (comment !== undefined) {
      const commentElement = generateComment(comment);

      fragment.appendChild(commentElement);
    }
  }

  if (itemComments.length > commentsOffset + commentsLimit) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }

  socialComments.appendChild(fragment);

  updateCommentsCount();

  commentsOffset += commentsLimit;

  return fragment;
};

const openFullSizeImage = (item) => {
  bigPicture.classList.remove('hidden');

  const picture = document.querySelector('.big-picture__img img');

  picture.src = item.url;

  const likesCount = document.querySelector('.likes-count');

  likesCount.textContent = item.likes;

  const socialCaption = document.querySelector('.social__caption');

  socialCaption.textContent = item.description;

  socialComments.innerHTML = '';

  commentsOffset = 0;

  itemComments = item.comments;

  loadComments();

  body.classList.add('modal-open');

  closeImageButton.addEventListener('click', closeFullSizeImage);

  commentsLoader.addEventListener('click', loadComments);

  document.addEventListener('keydown', closeFullSizeImage);
};

export {
  openFullSizeImage,
  closeFullSizeImage,
};
