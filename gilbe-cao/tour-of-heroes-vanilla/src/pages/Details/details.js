(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage();

  getHeroById(+heroId)
    .then((hero) => {
      details.setHero(hero);
      details.setView();
    });
}());
