// GLOBAL vars
let heroesPage = new HeroesPage(JSON.parse(localStorage.getItem('heroes')));
// Function that loads heroes to heroes.html
function loadHeroes() {
  heroesPage = new HeroesPage(JSON.parse(localStorage.getItem('heroes')));
  heroesPage.setview();
}
// Function threw when heroes.html is loaded.
(function heroesPageModel() {
  // Check if we have something on the storage. If not, we send a warning to the user.
  if (localStorage.getItem('heroes') === null) {
    alert('No data on the storage. Reload it.');
  } else {
    loadHeroes();
  }
}());

// Function threw when delete button used.
function deleteItem(buttonHref) {
  const [, slug] = buttonHref.split('=');
  if (heroesPage.delete(slug)) {
    alert(`Hero with slug ${slug} deleted.`);
    heroesPage.updateStorage();
    heroesPage.getStorage();
    heroesPage.setview();
  } else {
    alert('A problem has occured.');
  }
}

function updateMaxId(maxId) {
  localStorage.setItem('heroMaxId', maxId);
}

function addHero() {
  const domInput = document.getElementById('new-hero');
  //
  if (domInput.value.length <= 0) {
    alert('You have to write a name to add a new hero.');
  } else {
    if (localStorage.getItem('heroMaxId') === null) {
      saveBiggestIndex();
    }
    const maxId = parseInt(localStorage.getItem('heroMaxId'), 10) + 1;
    const heroName = domInput.value;
    heroesPage.heroes.push({ id: maxId, name: heroName });
    heroesPage.updateStorage();
    updateMaxId(maxId);
    loadHeroes();
    domInput.value = '';
    alert('Hero added.');
  }
}

function saveBiggestIndex() {
  // const newArray = heroesPage;
  // acc --> accumulator
  // cV --> currentValue
  // reduce(callback, startIndex) <-- by default stats at index 1
  // compare the values from accumulate and currentValue,
  // and applies the condition defined on callback
  // condition ? exprIfTrue : exprIfFalse
  const maxId = heroesPage.heroes.reduce((acc, cV) => acc = acc > cV.id ? acc : cV.id, 0);
  localStorage.setItem('heroMaxId', maxId);
}
