import { getRandomNumber, getRandomArrayElement } from './util.js';

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Иван',
  'Мария',
  'Виктор',
  'Юлия',
];

const getComment = () => ({
  id: getRandomNumber(1, 6),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(message),
  name: getRandomArrayElement(names),
});

const createItems = (index) => ({
  id: index,
  url: `photo/${index}.jpg`,
  description: `Описание № ${index}`,
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(0, 3)}, getComment),
});

const items = [];

for (let i = 0; i < 25; i++) {
  items[i] = createItems(i + 1);
}

export { items };
