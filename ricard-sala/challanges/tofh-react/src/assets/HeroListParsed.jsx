/* eslint-disable max-len */
export default function update(riki, id) {
  const heroesList = JSON.parse(localStorage.getItem('heroList'));
  const newHero = {
    name: riki,
  };
  const actualHeroList = heroesList.map((hero) => (hero.id === id ? { ...hero, ...newHero } : hero));
  localStorage.setItem('heroes', JSON.stringify(actualHeroList));
}
