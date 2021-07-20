// const getId = (pathString) => pathString.split('=')[1];
function transformUrlToObject(searchString) {
  let response;
  if (searchString) {
    const stringWithoutQuestionMark = searchString.slice(1, searchString.length);
    const entries = stringWithoutQuestionMark.split('&');
    entries.forEach((entry) => {
      const [key, value] = entries.split('=');
      response[key] = value;
    });
  }
}
//  return response;
//  const newUrlObject = new URLSearchParams(url.search);}
