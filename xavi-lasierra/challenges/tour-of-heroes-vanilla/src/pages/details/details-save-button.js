document.getElementById('save-button').addEventListener('click', () => {
  const inputName = document.getElementById('hero__name').value;
  const newHeroInput = {
    id: detail.id,
    slug: detail.slug,
    name: document.getElementById('hero__name').value
  };
  updateHero(newHeroInput);
  detail = new DetailsPage(detail.id, detail.slug, heroes);
  detail.setMainInfo();
});
