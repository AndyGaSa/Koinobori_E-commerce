/*
(function details() {
    const id = 13; // TODO hacer en el challenge
    const currentHero = heroes.find((hero) => hero.id === id);

    document.getElementById('hero__title').innerHTML = currentHero.name;
    document.getElementById('hero__id').innerHTML = currentHero.id;
    document.getElementById('hero__name').value = currentHero.name;
})()
*/

class DetailsPage {
    constructor(id, heroes) {
        this.id = id;
        this.hero = heroes.find((hero) => hero.id === id)
    }

    setView() {
        document.getElementById('hero__title').innerHTML = this.hero.name;
        document.getElementById('hero__id').innerHTML = this.hero.id;
        document.getElementById('hero__name').value = this.hero.name;
    }
}

const heroId = 11;
const details = new DetailsPage(heroId, heroes);
details.setView();