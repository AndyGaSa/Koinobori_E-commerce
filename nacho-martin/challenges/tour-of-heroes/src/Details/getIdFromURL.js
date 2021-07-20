function getIdFromURL(location) {
  const currentLocation = location;
  const slug = currentLocation.split('=');
  const [, id] = slug;
  return +id;
}

module.exports = getIdFromURL();
