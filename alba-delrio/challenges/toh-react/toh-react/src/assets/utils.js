import heroes from './constants';

export function update(heroId, name) {
  const heroList = JSON.parse(localStorage.getItem('heroes', heroes));
  const newHero = {
    name
  };
  const actualHeroList = heroList
    .map((hero) => (hero.id === +heroId ? { ...hero, ...newHero } : hero));
  localStorage.setItem('heroes', JSON.stringify(actualHeroList));
}

export function deleteHero(id, setHeroes) {
  const heroList = JSON.parse(localStorage.getItem('heroes', heroes));
  const newHeroList = heroList.filter((hero) => hero.id !== id);
  localStorage.setItem('heroes', JSON.stringify(newHeroList));
  setHeroes(newHeroList);
}

export function createHero(name, setHeroes, addHero) {
  let heroList = JSON.parse(localStorage.getItem('heroes'));
  heroList = heroList.sort((a, b) => a.id - b.id);
  const lastId = heroList[heroList.length - 1].id + 1;
  const newHero = {
    id: lastId,
    name

  };

  heroList.push(newHero);
  localStorage.setItem('heroes', JSON.stringify(heroList));
  setHeroes(heroList);
  addHero({ name: '' });
}
