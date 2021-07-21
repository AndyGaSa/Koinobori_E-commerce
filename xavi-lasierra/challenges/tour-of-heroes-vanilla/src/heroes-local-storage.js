let heroes;

function getMaxId(heroesObject) {
  return Math.max(...heroesPredefined.map((hero) => +hero.id));
}

(function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
    localStorage.setItem('heroesMaxId', JSON.stringify(getMaxId(heroesPredefined)));
  }
  heroes = JSON.parse(localStorage.getItem('heroes'));
}());

function createNewHero() {

}
