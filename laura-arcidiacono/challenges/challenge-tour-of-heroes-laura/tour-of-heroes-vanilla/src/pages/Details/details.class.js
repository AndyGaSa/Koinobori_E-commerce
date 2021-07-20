class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  setId() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }

  setName() {
    document.getElementById('hero__name').value = this.hero.name;
  }
  setSlug() {
    document.getElementById('hero__slug').innerHTML = this.hero.slug;
  }
  setApperance() {
    document.getElementById('hero__appearance').innerHTML = this.hero.appearence;
  }
  setPowerstats() {
    document.getElementById('hero__powerstats').innerHTML = this.hero.powerstats;
  }

  setBiography() {
    document.getElementById('hero__biography').innerHTML = this.hero.biography;
  }

  setWork() {
    document.getElementById('hero__work').innerHTML = this.hero.work;
  }
  setConnections() {
    document.getElementById('hero__connections').innerHTML = this.hero.connections;
  }

  setImages() {
    document.getElementById('hero__images').innerHTML = this.hero.images;
  }
  setView() {
    this.setId();
    this.setName();
    this.setSlug();
    this.setPowerstats();
    this.setApperance();
    this.setBiography();
    this.setWork();
    this.setConnections();
    this.setImages();    
  }
}

module.exports = DetailsPage;
