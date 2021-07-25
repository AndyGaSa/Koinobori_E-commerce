const getNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber - 0)) + 0;

const giveSixRandomId = () => {
  const resultArray = [];
  const pkmnToTake = JSON.parse(localStorage.getItem('pkmnList'));
  do {
    const pkArray = pkmnToTake.splice(getNumber(pkmnToTake.length), 1);
    const { id } = pkArray[0];
    resultArray.push(id);
  } while (resultArray.length < 6);
  return resultArray;
};

export default giveSixRandomId;
