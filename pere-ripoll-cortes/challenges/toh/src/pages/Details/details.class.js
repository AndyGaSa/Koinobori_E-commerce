class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes.find((hero) => hero.id === id);
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero;
    document.getElementById('hero__id').innerHTML = this.id;
    document.getElementById('hero__name').value = this.hero;
  }
}

module.exports = DetailsPage;
