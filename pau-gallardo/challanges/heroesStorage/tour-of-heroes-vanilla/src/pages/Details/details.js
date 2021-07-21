(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const hero = heroes.find((hero) => hero.id === +heroId);
  const details = new DetailsPage(hero);
  details.setView();
}());
