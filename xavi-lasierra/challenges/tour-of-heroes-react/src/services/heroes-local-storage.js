import heroesPredefined from '../heroes-const';

function getMaxId(heroesObject) {
  return Math.max(...heroesObject.map((hero) => +hero.id));
}

function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
    localStorage.setItem('heroesMaxId', getMaxId(heroesPredefined) + 1);
  }
  JSON.parse(localStorage.getItem('heroes'));
}

export default heroesLocalStorage;
