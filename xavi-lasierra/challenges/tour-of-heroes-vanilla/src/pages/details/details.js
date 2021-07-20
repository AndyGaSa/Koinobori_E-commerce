(function detailsPageModel() {
  const { id, slug } = transformUrlQueryToObject(window.location.search);
  const detail = new DetailsPage(+id, slug, heroes);
  detail.setView();
}());
