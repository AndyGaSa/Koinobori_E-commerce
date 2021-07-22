function getHeroFromHtml() {
  const newHero = { id: getMaxId(), name: document.getElementById('new-hero').value };
  JSON.parse(localStorage.getItem(superHeroes));
  superHeroes.push(newHero);
}

function clickToAdd() {
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', (event) => {
    getHeroFromHtml();
    localStorage.setItem('superHeroes', JSON.stringify(superHeroes));
    paintAllHeroes();
  });
}
