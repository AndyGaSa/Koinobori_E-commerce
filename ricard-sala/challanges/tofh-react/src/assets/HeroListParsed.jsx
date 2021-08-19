/* eslint-disable max-len */
export default function update(event, id) {
  const heroesList = JSON.parse(localStorage.getItem('heroList'));
  const newHero = {
    name: event.target.value,
  };
  const actualHeroList = heroesList.map((hero) => (hero.id === id ? { ...hero, ...newHero } : hero));
  localStorage.setItem('heroList', JSON.stringify(actualHeroList));
}
