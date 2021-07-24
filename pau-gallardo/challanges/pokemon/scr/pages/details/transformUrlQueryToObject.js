function transformUrlQueryToObject(searchString) {
    const response = {};
  
    if (searchString) {
      const queryWithoutQuestionMark = searchString.slice(1, searchString.length);
      const entries = queryWithoutQuestionMark.split('&');
      entries.forEach((entry) => {
        const [key, value] = entry.split('=');
        response[key] = value;
      });
    }
    return response;
  }