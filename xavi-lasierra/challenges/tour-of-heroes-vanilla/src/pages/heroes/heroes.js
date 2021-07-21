let heroesPage;

(function heroesPageModel() {
  heroesPage = new HeroesPage(heroes);
  heroesPage.setView();
}());

document.getElementById('add-hero-button').addEventListener('click', () => {
  const input = document.getElementById('new-hero').value;
  if (input) {
    const newHero = createNewHero(input);
    document.getElementById('new-hero').value = '';
    heroesPage.setNewView(newHero);
  }
});
