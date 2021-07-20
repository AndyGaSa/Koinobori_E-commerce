(function detailsPageModel() {
  const hero = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+hero.id, hero.slug, heroes);
  details.setView();
}());
