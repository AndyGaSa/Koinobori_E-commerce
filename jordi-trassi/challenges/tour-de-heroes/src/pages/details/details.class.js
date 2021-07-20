class DetailsPage {
    constructor(id, slug, heroes) {
      this.id = id;
      this.slug = slug;
      this.hero = heroes?.find((hero) => hero.id === id);
    }

    setHero(heroes){
      if (this.id) {
        this.hero = heroes.find((hero) => this.hero.id === this.id);
      } else if (this.slug) {
        this.hero = heroes.find((hero) => hero.slug === this.slug);
      }

    }
  
    setView() {
      document.getElementById('hero__title').innerHTML = this.hero.name;
      document.getElementById('hero__id').innerHTML = this.hero.id;
      document.getElementById('hero__name').value = this.hero.name;
    }
  }
  
  module.exports = DetailsPage;
  