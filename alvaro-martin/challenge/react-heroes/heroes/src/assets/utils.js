/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */

export default function update(he, id) {
  const HeroList = JSON.parse(localStorage.getItem('heroes'));
  const newHero = {
    name: he.name.trim(),
    publisher: he.publisher.trim(),
    alter_ego: he.alter_ego.trim(),
    first_appearance: he.first_appearance.trim(),
    characters: he.characters.trim(),

  };
  const actualHeroList = HeroList.map((hero) => (hero.id === id ? { ...hero, ...newHero } : hero));
  localStorage.setItem('heroes', JSON.stringify(actualHeroList));
}
