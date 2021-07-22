function getHeroFromHtml() {
  const newHero = { id: +getMaxId(superHeroes) + 1, name: document.getElementById('new-hero').value };
  superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
  superHeroes.push(newHero);
  return newHero;
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (event) => {
  newHero = getHeroFromHtml();
  heroesPage.paintNewHero(newHero);
  localStorage.setItem('superHeroes', JSON.stringify(superHeroes));
  document.getElementById('new-hero').value = ('');
});
