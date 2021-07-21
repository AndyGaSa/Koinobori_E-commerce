/*
(function details() {
    const id = 13; // TODO hacer en el challenge
    const currentHero = heroes.find((hero) => hero.id === id);

    document.getElementById('hero__title').innerHTML = currentHero.name;
    document.getElementById('hero__id').innerHTML = currentHero.id;
    document.getElementById('hero__name').value = currentHero.name;
})()
*/

const { heroId } = transformUrlQueryToObject(location.search);
const details = new DetailsPage(+heroId, heroes);
details.setView();
