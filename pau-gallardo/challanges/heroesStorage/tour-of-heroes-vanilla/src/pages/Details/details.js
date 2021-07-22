(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const hero = heroes.find((heroEl) => heroEl.id === +heroId);
  const details = new DetailsPage(hero);
  details.setView();
}());
