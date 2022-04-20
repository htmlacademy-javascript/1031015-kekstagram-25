const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);
const hashtagField = document.querySelector('.text__hashtags');
const numberOfHashtags = 5;

pristine.addValidator(hashtagField, (value) => {
  value = value.trim();

  if (value === '') {
    return true;
  }

  const hashtags = value.split(/\s+/);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  let isValid = true;

  const hashtagsList = hashtags.map((item) => item.toLowerCase());

  hashtagsList.forEach((element) => {
    if (!re.test(element)) {
      isValid = false;
    }
  });

  if (hashtagsList.length > numberOfHashtags) {
    isValid = false;
  }

  if (new Set(hashtagsList).size !== hashtagsList.length) {
    isValid = false;
  }

  return isValid;
});

const validateForm = () => {
  const isValid = pristine.validate();

  return isValid;
};

export { validateForm };
