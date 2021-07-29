function getIdFromURL() {
  const id = location.search.split('=');
  return +id[1];
}
