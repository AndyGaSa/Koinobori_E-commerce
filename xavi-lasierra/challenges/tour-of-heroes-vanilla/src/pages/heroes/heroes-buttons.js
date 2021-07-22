(function getResetButtonText() {
  const button = document.getElementById('get-reset-button');
  if (heroes.length > 0) {
    button.innerText = 'Reset';
  } else {
    button.innerText = 'Get Heroes';
  }
}());

function buttonTextCheck() {
  const button = document.getElementById('get-reset-button');
  if (heroes.length > 0) {
    button.innerText = 'Reset';
  } else {
    button.innerText = 'Get Heroes';
  }
}

function addHeroButton() {
  const input = document.getElementById('new-hero').value;
  if (input) {
    const newHero = createNewHero(input);
    document.getElementById('new-hero').value = '';
    heroesPage.setNewView(newHero);

    buttonTextCheck();
  }
}

function filterHeroesButton() {
  const input = document.getElementById('filter-hero').value;

  const callbackFunction = (hero) => JSON.stringify(hero).toLowerCase()
    .includes(input.toLowerCase());
  heroesPage.resetPage(heroes.filter(callbackFunction));
}

function deleteHeroFromList(id) {
  deleteHero(id);
  document.getElementById(`hero-list${id}`).remove();
  buttonTextCheck();
}

function getResetHeroes() {
  const button = document.getElementById('get-reset-button');
  if (heroes.length > 0) {
    resetLocalSaveData();
    heroesPage.resetPage(heroes);
    button.innerText = 'Get Heroes';
  } else {
    makeRequest();
    button.innerText = 'Reset';
  }
}
