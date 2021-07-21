document.getElementById('save-button').addEventListener('click', () => {
  const inputName = document.getElementById('hero__name').value;
  updateHero(detail.id, detail.slug, inputName);
  detail = new DetailsPage(detail.id, detail.slug, heroes);
  detail.setMainInfo();
});
