function deleteHero() {
  JSON.parse(localStorage.getItem(superHeroes));
  const filterParameter = superHeroes.id;
  const
    nonDeletedHeroes = superHeroes.filter((hero) => hero.id !== filterParameter);
  localStorage.setItem('filteredHeroes', JSON.stringify(filteredHeroes));
  document.getElementById('new-hero').value = ('');
  heroesPage.paintFilteredHeroes(filteredHeroes);
}
