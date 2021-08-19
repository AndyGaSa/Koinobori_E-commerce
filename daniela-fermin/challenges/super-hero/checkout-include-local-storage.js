let superHeroes;

function getMaxId(array) {
  const arrayOfIds = array.map((hero) => hero.id);
  return Math.max(...arrayOfIds);
}

function saveMaxId() {

}

(function checkOrIncludeInLocalStorage() {
  if (localStorage.getItem('superHeroes') === null) {
    localStorage.setItem('superHeroes', JSON.stringify(superHeroesPredefined));

    localStorage.setItem('superHeroesMaxId', getMaxId(superHeroesPredefined));
  }
  superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
}());
