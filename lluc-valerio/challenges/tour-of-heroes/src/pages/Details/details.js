(function detailsPageModel() {
  const heroId = transformUrlQuerytoObject(location.search);
  const details = new DetailsPage(+heroId, heroes);
  details.setView();
}());
