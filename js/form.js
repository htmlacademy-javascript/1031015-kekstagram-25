import { isEscapeKey, isInputFocus } from '/js/util.js';
import { validateForm } from '/js/validator.js';

const imgUploadInput = document.querySelector('.img-upload__input');
const imgUpload = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const imgPreview = document.querySelector('.img-upload__preview');


const keyDownEvent = (evt) => {
  if (isEscapeKey(evt) && !isInputFocus(textHashtags) && !isInputFocus(textDescription)) {
    evt.preventDefault();
    imgUpload.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', keyDownEvent);
    form.reset();
  }
};

imgUploadInput.addEventListener('change', () => {
  const file = imgUploadInput.files[0];
  const element = document.createElement('img');

  element.src = URL.createObjectURL(file);
  imgPreview.innerHTML='';
  imgPreview.appendChild(element);
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

form.addEventListener('submit', (event)=> {
  const isValid = validateForm();

  if (!isValid) {
    event.preventDefault();
  }
});
