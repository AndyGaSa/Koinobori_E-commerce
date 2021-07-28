import heroesPredefined from '../heroesPredefined';

function getMaxId(heroesObject) {
  return Math.max(...heroesObject.map((hero) => +hero.id));
}

function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
    localStorage.setItem('heroesMaxId', getMaxId(heroesPredefined) + 1);
  }
}

function resetLocalStorage() {
  localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
  localStorage.setItem('heroesMaxId', getMaxId(heroesPredefined) + 1);
  return heroesPredefined;
}

export {
  heroesLocalStorage,
  resetLocalStorage
};
