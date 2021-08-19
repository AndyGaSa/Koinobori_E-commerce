export default function deleteHeroes(heroId) {
  let localHeroes = JSON.parse(localStorage.getItem('heroes'));
  localHeroes = localHeroes.filter(({ id }) => id !== heroId);
  localStorage.setItem('heroes', JSON.stringify(localHeroes));
  window.location.reload();
}
