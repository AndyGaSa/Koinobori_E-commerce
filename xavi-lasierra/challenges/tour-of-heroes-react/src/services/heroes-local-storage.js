import heroesPredefined from '../heroes-const';

function getMaxId(heroesObject) {
  return Math.max(...heroesObject.map((hero) => +hero.id));
}

function saveMaxId() {
  localStorage.setItem('heroesMaxId', JSON.stringify(+JSON.parse(localStorage.getItem('heroesMaxId')) + 1));
}

function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
    localStorage.setItem('heroesMaxId', getMaxId(heroesPredefined) + 1);
  }
  JSON.parse(localStorage.getItem('heroes'));
}

export {
  heroesLocalStorage,
  saveMaxId

};
