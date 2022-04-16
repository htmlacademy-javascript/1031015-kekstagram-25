import { isEscapeKey, isInputFocus } from '/js/util.js';

const imgUploadStart = document.querySelector('.img-upload__label');
const imgUpload = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');


const keyDownEvent = (evt) => {
  if (isEscapeKey(evt) && !isInputFocus(textHashtags) && !isInputFocus(textDescription)) {
    evt.preventDefault();
    imgUpload.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

imgUploadStart.addEventListener('click', () => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', keyDownEvent);
});

imgUploadCancel.addEventListener('click', () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', keyDownEvent);
  form.reset();
});


