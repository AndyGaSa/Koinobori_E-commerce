function transformUrlQueryToObject(searchString) {
  return searchString.split('=')[1];
}

module.exports = transformUrlQueryToObject;
