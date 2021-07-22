document.getElementById('add-hero-button').addEventListener('click', () => {
  const input = document.getElementById('new-hero').value;
  if (input) {
    const newHero = createNewHero(input);
    document.getElementById('new-hero').value = '';
    heroesPage.setNewView(newHero);
  }
});

document.getElementById('filter-hero-button').addEventListener('click', () => {
  const input = document.getElementById('filter-hero').value;

  const callbackFunction = (hero) => JSON.stringify(hero).toLowerCase()
    .includes(input.toLowerCase());
  heroesPage.resetPage(heroes.filter(callbackFunction));
});

document.getElementById('reset-button').addEventListener('click', () => {
  resetLocalSaveData();
  heroesPage.resetPage(heroes);
});

function deleteHeroFromList(id) {
  deleteHero(id);
  document.getElementById(`hero-list${id}`).remove();
}
