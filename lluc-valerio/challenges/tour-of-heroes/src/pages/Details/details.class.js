class DetailsPage {
  constructor(id, slug, heroes) {
    this.id = id;
    this.slug = slug;
    this.hero = this.searchIdOrSlug(heroes);
  }

  searchIdOrSlug(heroes) {
    let heroFound;
    if (this.id) {
      heroFound = heroes?.find((hero) => hero.id === this.id);
    } else if (this.slug) {
      heroFound = heroes?.find((hero) => hero.slug === this.slug);
    } else {
      heroFound = {};
    }
    return heroFound;
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero.powerstats.intelligence;
    document.getElementById('hero__id').innerHTML = this.hero.id;
    document.getElementById('hero-name').value = this.hero.name;
  }
}

module.exports = DetailsPage;
