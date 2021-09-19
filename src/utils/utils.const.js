export default function extractLengthClothes(stockList, category) {
  const result = stockList.clothes[category].length;
  return (
    result - 1
  );
}

// module.exports = extractLengthClothes;
