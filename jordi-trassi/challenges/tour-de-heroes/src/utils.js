let inputTextHero = document.getElementsByClassName('new-hero');
let maxId = JSON.parse(localStorage.getItem('heroes')).length;
let heroNewName;
let heroStorage;

function setItems() {
  return localStorage.setItem('heroes', JSON.stringify(newHeroesList));
}

function deleteHero(e) {
  const heroStorage = JSON.parse(localStorage.getItem('heroes'));
  const { id } = e.target;
  const newHeroesList = heroStorage.filter((hero) => hero.id !== parseFloat(id));
  return localStorage.setItem('heroes', JSON.stringify(newHeroesList));
}

function eraseHero(e) {
  deleteHero(e);
  printNewHeroList();
}

function printNewHeroList() {
  const newStoredHeroes = JSON.parse(localStorage.getItem('heroes'));
  const oldHeroList = document.getElementById('heroes__list');
  oldHeroList.innerHTML = '';
  const newHeroListToPrint = new HeroesPage(newStoredHeroes);
  newHeroListToPrint.setView();
  return newHeroListToPrint.setDeleteButtonId();
}

function writeHeroProperty(event) {
  inputTextHero = event.target.value;
}

function addHero(e) {
  const heroStorage = JSON.parse(localStorage.getItem('heroes'));
  const addHeroButton = document.getElementsByClassName('add-button');
  maxId += 1;
  const newHero = { name: inputTextHero, id: maxId, slug: `${maxId}-${inputTextHero}` };
  heroStorage.push(newHero);
  const element = `<li class='hero-list-items'>
    <a href="../Details/details.html?heroId=${newHero.id}">
    <span class="badge">${newHero.id}</span> ${newHero.name}
    </a>
    <button class="delete" id="${newHero.id}" title="delete hero">x</button>
    </li>`;
  const newHeroList = localStorage.setItem('heroes', JSON.stringify(heroStorage));
  const parentElement = document.getElementById('heroes__list');
  parentElement.innerHTML += element;
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => { button.addEventListener('click', eraseHero); });
}

function updateHero() {
  let heroesStorage = JSON.parse(localStorage.getItem('heroes'));
  const heroId = document.getElementById('hero__id').innerHTML;
  const heroToUpdate = heroesStorage.find((hero) => hero.id === +heroId);
  if (heroNewName) {
    heroToUpdate.name = heroNewName;
    heroToUpdate.slug = `${heroId}-${heroNewName}`;
  }

  localStorage.setItem('heroes', JSON.stringify(heroesStorage));
  heroesStorage = JSON.parse(localStorage.getItem('heroes'));
  const newDetailsPage = new DetailsPage(+heroId, heroesStorage);
  newDetailsPage.setId();
  newDetailsPage.setName();
  newDetailsPage.setSlug();
}

function writeHeroNewName(event) {
  if (event) {
    heroNewName = event.target.value;
  }
}
