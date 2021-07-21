const getValue = () => {
  const input = document.getElementById('new-hero');
  return input.value;
};

(function heroesPageModel() {
  const heroesPage = new HeroesPage(heroes);
  heroesPage.setView();

  const btn = document.getElementById('btnAdd');
  btn.addEventListener('click', () => heroesPage.addHeroes(document.getElementById('new-hero').value));
}());
