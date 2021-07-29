(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+heroId, heroesStorage);
  details.setView();
}());
