class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__id').innerHTML = this.hero.id;
    document.getElementById('hero__name').value = this.hero.name;
    document.getElementById('hero__slug').value = this.hero.slug;
    document.getElementById('hero__appearance').value = this.hero.appearence;
    document.getElementById('hero__powerstats').value = this.hero.powerstats;
    document.getElementById('hero__biography').value = this.hero.biography;
    document.getElementById('hero__work').value = this.hero.work;
    document.getElementById('hero__connections').value = this.hero.connections;
    document.getElementById('hero__images').value = this.hero.images;
    
  }
}

module.exports = DetailsPage;
