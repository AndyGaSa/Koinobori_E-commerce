// Immediately Invoked Function Expression. 

(function detailsPageModel() {
  const heroId = queryToObject(location.search);
  const details = new DetailsPage(heroId, heroes);
  details.setView();
}());
