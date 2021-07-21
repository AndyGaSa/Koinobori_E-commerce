function getIdFromUrl(url) {
  const response = {};
  const queryWithoutQuestionMark = url.slice(1, url.length);
  const entries = queryWithoutQuestionMark.split('&');
  entries.forEach((entry) => {
    const [key, value] = entry.split('=');
    response[key] = value;
  });
  return response;
}
