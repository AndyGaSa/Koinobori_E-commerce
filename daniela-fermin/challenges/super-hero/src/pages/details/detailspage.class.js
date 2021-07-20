class DetailsPage {
  constructor(superHeroes, id, slug) {
    this.id = id;
    this.slug = slug;
  }

  findHero(superHeroes) {
    if (this.id) {
      this.hero = superHeroes.find((hero) => hero.id === this.id);
    } else if (this.slug) {
      this.hero = superHeroes.find((hero) => hero.slug === this.slug);
    }
  }
}

module.exports = DetailsPage;
