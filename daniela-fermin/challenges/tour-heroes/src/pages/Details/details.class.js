class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  paintSingleHero() {
    document.getElementById('hero__title').innerHTML = this.hero.superhero;
    document.getElementById('hero__id').innerHTML = this.hero.id;
    document.getElementById('hero__name').value = this.hero.superhero;
  }
}
