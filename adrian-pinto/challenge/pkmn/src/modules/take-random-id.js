const getNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber - 0)) + 0;

const giveRandomId = (maxValue) => {
  const resultArray = [];
  const numbersToTake = [...Array(maxValue).keys()];
  do {
    resultArray.push(Number.parseInt(numbersToTake.splice(getNumber(numbersToTake.length), 1), 10));
  } while (resultArray.length < 6);
  return resultArray;
};

export default giveRandomId;
