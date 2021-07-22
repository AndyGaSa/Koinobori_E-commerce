let storage = JSON.parse(localStorage.getItem('heroes'));
let heroIdCounter = 10;
let backupStorage = [];
const searchbox = document.getElementById('search-hero');
const createHeroInput = document.getElementById('new-hero');
const saveHeroButton = document.getElementById('save-hero');
const resetHeroButton = document.getElementById('reset-heroes');
function addHero() {
  if (!localStorage.getItem('heroes')) {
    heroIdCounter = 10;
  } else {
    heroIdCounter += 1;
  }
  storage.push({ id: heroIdCounter, name: createHeroInput.value });
  localStorage.setItem('heroes', JSON.stringify(storage));
  document.getElementById('hero-list-DOM').innerHTML = '';
  const refresh = new HeroesCard(storage);
  refresh.setViews();
}

function removeHero(e) {
  const eventTarget = e.path[1];
  const id = eventTarget.children[0].innerText;
  const deleteName = id.substring(2);
  const newObj = storage.filter((element) => !JSON.stringify(element).includes(deleteName));
  localStorage.setItem('heroes', JSON.stringify(newObj));
  storage = JSON.parse(localStorage.getItem('heroes'));
  document.getElementById('hero-list-DOM').innerHTML = '';
  const refresh = new HeroesCard(storage);

  refresh.setViews();
}

function resetHeroes() {
  localStorage.setItem('heroes', JSON.stringify(HEROES_LIST));
  storage = JSON.parse(localStorage.getItem('heroes'));
  document.getElementById('hero-list-DOM').innerHTML = '';
  const refresh = new HeroesCard(storage);
  refresh.setViews();
}
function filter() {
  backupStorage = storage.filter((element) => JSON.stringify(element).includes(searchbox.value));
  document.getElementById('hero-list-DOM').innerHTML = '';
  const filterPrint = new HeroesCard(backupStorage);
  filterPrint.setViews();
}

searchbox.addEventListener('input', filter);
saveHeroButton.addEventListener('click', addHero);
resetHeroButton.addEventListener('click', resetHeroes);
