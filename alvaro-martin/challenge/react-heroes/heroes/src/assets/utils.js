/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */

export default function update(he, id) {
  const HeroList = JSON.parse(localStorage.getItem('heroes'));
  const newHero = {
    name: he,
  };
  const actualHeroList = HeroList.map((hero) => (hero.id === id ? { ...hero, ...newHero } : hero));
  localStorage.setItem('heroes', JSON.stringify(actualHeroList));
}
