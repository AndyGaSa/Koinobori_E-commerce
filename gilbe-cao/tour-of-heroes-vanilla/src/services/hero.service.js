function getHeroes() {
  return fetch('../../superHeroData.json')
    .then((response) => response.json())
    .then((heroes) => heroes);
}

function getHeroById(heroId) {
  const heroes = JSON.parse(localStorage.getItem('heroes'));
  const hero = heroes.find((currentHero) => currentHero.id === heroId);

  return hero
    ? Promise.resolve(hero)
    : Promise.reject(new Error(`There is no hero with id: ${heroId}`));
}

function createHero(name) {
  let nextId = +localStorage.getItem('nextId');
  let heroes = JSON.parse(localStorage.getItem('heroes'));

  if (!nextId) {
    heroes = heroes.sort((a, b) => a.id - b.id);
    nextId = heroes[heroes.length - 1].id + 1;
  }

  const hero = {
    name,
    id: nextId,
  };

  heroes = [
    ...heroes,
    hero,
  ];

  localStorage.setItem('nextId', nextId + 1);
  localStorage.setItem('heroes', JSON.stringify(heroes));
}

module.exports = {
  getHeroes,
  getHeroById,
};
