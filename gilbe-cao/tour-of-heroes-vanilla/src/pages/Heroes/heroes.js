const heroes = localStorage.getItem('heroes');
if (heroes?.length) {
  setHeroesView();
} else {
  getHeroes().then((heroes) => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
    setHeroesView();
  });
}

function addHero() {
  const heroNameInput = document.getElementById('new-hero');
  const heroName = heroNameInput.value.trim();

  if (!heroName) return;

  createHero(heroName);
  clearView();
  setHeroesView();
}
