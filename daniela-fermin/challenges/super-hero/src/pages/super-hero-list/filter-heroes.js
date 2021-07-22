function clickToFilter() {
  const addButton = document.getElementById('filter-button');
  addButton.addEventListener('click', (event) => {
    filterBy();
    localStorage.setItem('superHeroes', JSON.stringify(superHeroes));
  });
}

function filterBy() {
  JSON.parse(localStorage.getItem(superHeroes));
  const filterParameter = document.getElementById('filter-hero').value;
  const
    filteredHeroes = superHeroes.filter((hero) => JSON.stringify(hero).contains(filterParameter));
  paintAllHeroes(filteredHeroes);
}
