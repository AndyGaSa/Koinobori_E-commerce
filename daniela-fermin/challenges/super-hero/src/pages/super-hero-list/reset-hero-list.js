function resetHeroList() {
  localStorage.getItem('superHeroes');
  superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
  console.log(superHeroes);
  heroesPage.paintAllHeroes(superHeroes);
}
