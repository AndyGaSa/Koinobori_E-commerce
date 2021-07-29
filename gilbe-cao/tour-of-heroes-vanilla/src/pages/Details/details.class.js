class DetailsPage {
  constructor(hero) {
    this.hero = hero;
  }

  setHero(hero) {
    this.hero = hero;
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero?.name;
    document.getElementById('hero__id').innerHTML = this.hero?.id;
    document.getElementById('hero__name').value = this.hero?.name;
  }
}

module.exports = DetailsPage;
