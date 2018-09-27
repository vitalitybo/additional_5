module.exports = function check(str, bracketsConfig) {
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0, brLen = bracketsConfig.length; j < brLen; j++) {
      const conditionOne = arr[i] === bracketsConfig[j][0];
      const conditionTwo = arr[i + 1] === bracketsConfig[j][1];

      if (conditionOne && conditionTwo) {
        arr.splice(i, 1);
        arr.splice(i, 1);
        i = i - 2;
      }
    }
  }

  return !arr.length;
};
