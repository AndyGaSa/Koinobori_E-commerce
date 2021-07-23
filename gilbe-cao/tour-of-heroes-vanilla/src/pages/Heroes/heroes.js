getHeroes().then((heroes) => {
  localStorage.setItem('heroes', JSON.stringify(heroes));
  setHeroesView();
});
