export const getDiff = (obj1, obj2) => {
  return Object.keys(obj1).reduce((acc, key) => {
    // Если ключ есть в обоих и значения разные — забираем из второго объекта
    if (Object.hasOwn(obj2, key) && obj1[key] !== obj2[key]) {
      acc[key] = obj2[key];
    }
    return acc;
  }, {});
};
