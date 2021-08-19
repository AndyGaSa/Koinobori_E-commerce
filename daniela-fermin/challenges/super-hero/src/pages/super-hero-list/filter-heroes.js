const filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', (event) => {
  filterBy();
  localStorage.setItem('superHeroes', JSON.stringify(superHeroes));
});

function filterBy() {
  JSON.parse(localStorage.getItem(superHeroes));
  const filterParameter = document.getElementById('filter-hero').value;
  const
    filteredHeroes = superHeroes.filter((hero) => JSON.stringify(hero).includes(filterParameter));
  localStorage.setItem('filteredHeroes', JSON.stringify(filteredHeroes));
  document.getElementById('new-hero').value = ('');
  heroesPage.paintFilteredHeroes(filteredHeroes);
}
