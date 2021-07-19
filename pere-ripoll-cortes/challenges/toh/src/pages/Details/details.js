(function details() {
  const id = location.search.split('?')[1];
  const currentHero = heroes.find((hero) => hero.id === id);

  document.getElementById('hero__title').innerHTML = currentHero.superhero;
  document.getElementById('hero__id').innerHTML = currentHero.id;
  document.getElementById('hero__name').value = currentHero.superhero;
}());
