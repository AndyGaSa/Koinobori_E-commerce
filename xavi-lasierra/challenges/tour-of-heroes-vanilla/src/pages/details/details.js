let detail;

(function detailsPageModel() {
  const { id, slug } = transformUrlQueryToObject(window.location.search);
  detail = new DetailsPage(+id, slug, heroes);
  detail.setView();
}());

document.getElementById('save-button').addEventListener('click', () => {
  const inputName = document.getElementById('hero__name').value;
  updateHero(detail.id, detail.slug, inputName);
  detail = new DetailsPage(detail.id, detail.slug, heroes);
  detail.setMainInfo();
});
