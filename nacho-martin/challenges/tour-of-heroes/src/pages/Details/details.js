/*
(function details() {
    const id = 13; // TODO hacer en el challenge
    const currentHero = heroes.find((hero) => hero.id === id);

    document.getElementById('hero__title').innerHTML = currentHero.name;
    document.getElementById('hero__id').innerHTML = currentHero.id;
    document.getElementById('hero__name').value = currentHero.name;
})()
*/
function getId() {
  const currentHeroId = window.location.search;
  return currentHeroId.split('=')[1];
}

const details = new DetailsPage(getId(), heroes);

details.setView();
