let heroes;

function getMaxId(heroesObject) {
  return Math.max(...heroesObject.map((hero) => +hero.id));
}

function saveHeroes(newHeroes) {
  localStorage.setItem('heroes', JSON.stringify(newHeroes));
}

function saveMaxId(newMaxId) {
  localStorage.setItem('heroesMaxId', JSON.stringify(newMaxId));
}

(function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    saveHeroes([]);
    saveMaxId(0);
  }
  heroes = JSON.parse(localStorage.getItem('heroes'));
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
  heroes = heroes.filter(({ id }) => id !== heroId);
  saveHeroes(heroes);
}

function updateHero(heroObject) {
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

function resetLocalSaveData() {
  saveHeroes([]);
  saveMaxId(0);
  heroes = JSON.parse(localStorage.getItem('heroes'));
}
