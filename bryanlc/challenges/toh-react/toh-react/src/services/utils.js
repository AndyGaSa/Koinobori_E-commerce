/* eslint-disable no-undef */
export function update(heroId, name) {
  const heroesLocal = JSON.parse(localStorage.getItem('heroes'));
  const newHero = {
    name
  };
  const localHeroes = heroesLocal.map((hero) => (hero.id === +heroId
    ? { ...hero, ...newHero } : hero));

  localStorage.setItem('heroes', JSON.stringify(localHeroes));
}

export function deleteHero(heroId) {
  const heroesLocal = JSON.parse(localStorage.getItem('heroes'));
  const localheroes = heroesLocal.filter((hero) => hero.id !== heroId);
  localStorage.setItem('heroes', JSON.stringify(localheroes));
  window.location.reload();
}
