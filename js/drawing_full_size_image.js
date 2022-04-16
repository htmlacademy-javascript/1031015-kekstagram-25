const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeImageButton = document.querySelector('.big-picture__cancel');
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

const createCommentsFragment = (comments) => {
  const fragment = document.createDocumentFragment();

  for (let i = commentsOffset; i < commentsOffset + commentsLimit; i++) {
    const comment = comments[i];

    if (comment !== undefined) {
      const commentElement = generateComment(comment);

      fragment.appendChild(commentElement);
    }
  }

  commentsOffset += commentsLimit;

  return fragment;
};

const openFullSizeImage = (item) => {
  bigPicture.classList.remove('hidden');

  const picture = document.querySelector('.big-picture__img img');

  picture.src = item.url;

  const likesCount = document.querySelector('.likes-count');

  likesCount.textContent = item.likes;

  const commentsCount = document.querySelector('.comments-count');

  commentsCount.textContent = item.comments.length;

  const socialCaption = document.querySelector('.social__caption');

  socialCaption.textContent = item.description;

  const socialComments = document.querySelector('.social__comments');

  socialComments.innerHTML = '';

  commentsOffset = 0;

  const commentsFragment = createCommentsFragment(item.comments);

  socialComments.appendChild(commentsFragment);

  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  if (item.comments.length > commentsLimit) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }

  socialCommentCount.classList.remove('hidden');
  body.classList.add('modal-open');

  closeImageButton.addEventListener('click', closeFullSizeImage);

  commentsLoader.addEventListener('click', () => {
    const newCommentsFragment = createCommentsFragment(item.comments);

    socialComments.appendChild(newCommentsFragment);

    if (item.comments.length > commentsOffset + commentsLimit) {
      commentsLoader.classList.remove('hidden');
    } else {
      commentsLoader.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', closeFullSizeImage);
};

export {
  openFullSizeImage,
  closeFullSizeImage,
};
