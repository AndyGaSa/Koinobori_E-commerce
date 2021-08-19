let localHeroes = JSON.parse(localStorage.getItem('heroes'));
export function update(heroId, name) {
  const newHero = {
    name,
  };
  localHeroes = localHeroes.map((hero) => (hero.id === +heroId ? { ...hero, ...newHero } : hero));

  localStorage.setItem('heroes', JSON.stringify(localHeroes));
  window.location.reload();
}
export function deleteHeroes(heroId) {
  localHeroes = localHeroes.filter(({ id }) => id !== heroId);
  localStorage.setItem('heroes', JSON.stringify(localHeroes));
  window.location.reload();
}
export function addHero(heroName) {
  const newHero = {
    id: (localHeroes[localHeroes.length - 1].id) + 1,
    name: heroName,
  };
  localHeroes.push(newHero);
  localStorage.setItem('heroes', JSON.stringify(localHeroes));
  window.location.reload();
}
