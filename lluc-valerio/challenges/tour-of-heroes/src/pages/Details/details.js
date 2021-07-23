(function detailsPageModel() {
  const hero = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+hero.id, hero.slug, JSON.parse(localStorage.getItem('heroes')));
  details.setView(document.getElementById('details-container'));
}());
