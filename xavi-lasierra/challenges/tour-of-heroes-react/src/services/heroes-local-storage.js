import heroesPredefined from '../heroes-const';

function getHeroes() {
  return JSON.parse(localStorage.getItem('heroes'));
}

function getMaxId(heroesObject) {
  return Math.max(...heroesObject.map((hero) => +hero.id));
}

function saveHeroes(newHeroes) {
  localStorage.setItem('heroes', JSON.stringify(newHeroes));
}

function saveMaxId() {
  localStorage.setItem('heroesMaxId', JSON.stringify(+JSON.parse(localStorage.getItem('heroesMaxId')) + 1));
}

function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    saveHeroes(heroesPredefined);
    localStorage.setItem('heroesMaxId', getMaxId(heroesPredefined) + 1);
  }
  JSON.parse(localStorage.getItem('heroes'));
}

function deleteHero(heroId) {
  let heroes = getHeroes();
  heroes = heroes.filter(({ id }) => id !== heroId);
  saveHeroes(heroes);
}

function updateHero(heroObject) {
  let heroes = getHeroes();
  const newHeroProperties = {
    name: heroObject.name
  };
  if (heroObject.id) {
    heroes = heroes
      .map((hero) => (hero.id === heroObject.id ? { ...hero, ...newHeroProperties } : hero));
  } else if (heroObject.slug) {
    heroes = heroes
      .map((hero) => (hero.slug === heroObject.slug ? { ...hero, ...newHeroProperties } : hero));
  }
  saveHeroes(heroes);
}

export {
  heroesLocalStorage,
  getHeroes,
  saveHeroes,
  saveMaxId,
  deleteHero,
  updateHero
};
