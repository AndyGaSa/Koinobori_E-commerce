(function detailsPageModel() {
  const { id, slug } = tranformQueryToObject(location.search);
  const details = new DetailsPage(superHeroes, +id, slug);
  details.paintHeroDetails();
}());
