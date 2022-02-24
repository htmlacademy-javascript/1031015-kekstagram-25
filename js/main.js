//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(-5, -1);

//имя_функции(проверяемая_строка, максимальная_длина);
const checkMaxLength = (checkingString, maxLength) => {
  if (checkingString.length <= maxLength) {
    return true;
  }
  return false;
};

checkMaxLength('Пумпурум', 45);

