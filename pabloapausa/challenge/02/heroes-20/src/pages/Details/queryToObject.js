function queryToObject(string) {
  if (!string) return; 
  const query = string.slice(1, string.length);
  const [, value] = query.split('='); 
  return +value; 
}

