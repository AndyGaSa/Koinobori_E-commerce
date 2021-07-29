// Immediately Invoked Function Expression. 

(function detailsPageModel() {
  const heroId = queryToObject(location.search);
  // Qué hace 'llocation.search'
  const details = new DetailsPage(heroId, heroes);
  // Por qué 'queryToObject' no está dentro de la clase. 
  details.setView();
}());
