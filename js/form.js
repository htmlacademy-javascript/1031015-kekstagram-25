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

const  minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scale = {
  min: 25,
  max: 100,
  step: 25,
};

const changeSize = (digit) => {
  let newValue = parseInt(scaleValue.value, 10)+ scale.step * digit;

  if (newValue < scale.min) {
    newValue = scale.min;
  }
  if (newValue > scale.max) {
    newValue = scale.max;
  }

  scaleValue.value = `${newValue}%`;
  imgPreview.style.transform = `scale(${newValue / 100})`;
};


const onMinusButtonClick = () => {
  changeSize(-1);
};

const onPlusButtonClick = () => {
  changeSize(1);
};

minusButton.addEventListener('click', onMinusButtonClick);
plusButton.addEventListener('click', onPlusButtonClick);
