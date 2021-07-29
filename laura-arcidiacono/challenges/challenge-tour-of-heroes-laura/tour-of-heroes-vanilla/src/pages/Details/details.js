(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+heroId, JSON.parse(localStorage.getItem('heroes')));
  details.setView();
}());
