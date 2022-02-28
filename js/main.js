//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInc = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInc(-5, -1);

//имя_функции(проверяемая_строка, максимальная_длина);
const checkMaxLength = (checkingString, maxLength) => checkingString.length <= maxLength;

checkMaxLength('Пумпурум', 45);

