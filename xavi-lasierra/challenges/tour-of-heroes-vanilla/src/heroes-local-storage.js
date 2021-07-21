let heroes;

(function heroesLocalStorage() {
  if (localStorage.getItem('heroes') === null) {
    localStorage.setItem('heroes', JSON.stringify(heroesPredefined));
  }
  heroes = JSON.parse(localStorage.getItem('heroes'));
}());
