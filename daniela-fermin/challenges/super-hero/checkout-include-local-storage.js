function getMaxId(array) {
  const arrayOfIds = array.map((hero) => this.hero.id);
  Math.max(...arrayOfIds);
}

(function checkOrIncludeInLocalStorage() {
  if (localStorage.getItem('superHeroes' === null)) {
    localStorage.setItem('superHeroes', JSON.stringify(superHeroesPredefined));
    localStorage.setItem('superHeroesMaxId', JSON.stringify(getMaxId(superHeroesPredefined)));
  }
  superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
}());
