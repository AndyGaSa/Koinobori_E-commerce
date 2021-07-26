function getHeroes() {
  const cont = localStorage.getItem('cont');
  return fetch('./superHeroData.json')
    .then((response) => response.json())
    .then((heroes) => heroes)
    .catch((error) => {
      console.log('error.message');
      return [];
    });
  if (cont === null) {
    localStorage.setItem('heroes', heroes);
    localStorage.setItem('cont', 0);
  }
}
getHeroes();
module.exports = getHeroes;
