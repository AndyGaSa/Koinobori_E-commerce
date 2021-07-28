import heroesPredefined from '../heroesPredefined';

function getMaxId(heroesObject) {
  // return Math.max(...heroesObject.map((hero) => +hero.id.));
  return heroesObject.length;
}

function resetLocalStorage() {
  localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
  localStorage.setItem('heroesMaxId', getMaxId(heroesPredefined) + 1);
  return heroesPredefined;
}

function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    resetLocalStorage();
  }
}

export {
  heroesLocalStorage,
  resetLocalStorage
};
