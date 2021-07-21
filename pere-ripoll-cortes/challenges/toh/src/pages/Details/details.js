(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+heroId, heroes);
  details.setView();

  const btn = document.getElementById('btn_save');
  btn.addEventListener('click', () => details.readValues(document.getElementById('hero__name').value));
}());
