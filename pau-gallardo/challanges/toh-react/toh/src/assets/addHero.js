export default function addHeroes(heroName) {
  let localHeroes = JSON.parse(localStorage.getItem('heroes'));
  let lastId = JSON.parse(localStorage.getItem('lastId'));
  lastId = +lastId + 1;
  const hero = {
    id: lastId,
    name: heroName,
  };
  hero.id = lastId;
  localHeroes = [...localHeroes, hero];
  localStorage.setItem('heroes', JSON.stringify(localHeroes));
  localStorage.setItem('lastId', JSON.stringify(lastId));
  window.location.reload();
}
