class DetailsPage {
    constructor(id, heroes) {
        this.id = id;
        this.hero = heroes.find((hero) => hero.id === id);
    }

    setView(){
        document.getElementById('hero__title').innerHTML = this.hero.name;
        document.getElementById('hero__id').innerHTML = this.hero.id;
        document.getElementById('hero__name').value = this.hero.name;
    }
}

const id = 12; //create getId(location.search)
const detail = new DetailsPage(id, heroes);
detail.setView();

module.exports = DetailsPage;
