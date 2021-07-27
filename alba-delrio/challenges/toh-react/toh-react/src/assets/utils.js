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
