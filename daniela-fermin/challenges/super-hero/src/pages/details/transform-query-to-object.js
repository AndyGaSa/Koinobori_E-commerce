function tranformQueryToObject(pathString) {
  const response = {};
  if (pathString) {
    const queryWithoutQuestioMark = pathString.slice(1, pathString.length);
    const entries = queryWithoutQuestioMark.split('&');
    entries.forEach((entry) => {
      const [key, value] = entry.split('=');
      response[key] = value;
    });
  }
  return response;
}

module.exports = tranformQueryToObject;
