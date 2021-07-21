let detail;

(function detailsPageModel() {
  const { id, slug } = transformUrlQueryToObject(window.location.search);
  detail = new DetailsPage(+id, slug, heroes);
  detail.setView();
}());
