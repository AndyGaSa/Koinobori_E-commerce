let heroes;

function getMaxId(heroesObject) {
  return Math.max(...heroesObject.map((hero) => +hero.id));
}

function getHeroes() {
  return JSON.parse(localStorage.getItem('heroes'));
}

function saveHeroes(newHeroes) {
  localStorage.setItem('heroes', JSON.stringify(newHeroes));
}

function saveMaxId(newMaxId) {
  localStorage.setItem('heroesMaxId', JSON.stringify(newMaxId));
}

(function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    saveHeroes(heroesPredefined);
    saveMaxId(getMaxId(heroesPredefined));
  }
  heroes = getHeroes();
}());

function createNewHero(heroName) {
  const id = +JSON.parse(localStorage.getItem('heroesMaxId')) + 1;
  const newHero = {
    id,
    name: heroName,
    slug: `${id}-${heroName.toLowerCase().replace(' ', '-')}`
  };
  heroes.push(newHero);
  saveHeroes(heroes);
  saveMaxId(id);
  return newHero;
}

function deleteHero(heroId) {
  heroes = heroes.filter((hero) => hero.id !== heroId);
  saveHeroes(heroes);
}
