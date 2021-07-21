class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  setTitle() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
  }

  setId() {
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }

  setName() {
    document.getElementById('hero__name').value = this.hero.name;
  }

  setSlug() {
    document.getElementById('hero__slug').innerHTML = this.hero.slug;
  }

  setPowerstats() {
    document.getElementById('hero__powerstats').value = this.hero.powerstats;
  }

  setAppeareance() {
    document.getElementById('hero__appearance').value = this.hero.appearance;
  }

  setBiography() {
    document.getElementById('hero__biography').value = this.hero.biography;
  }

  setWork() {
    document.getElementById('hero__work').value = this.hero.work;
  }

  setConnections() {
    document.getElementById('hero__connections').value = this.hero.connections;
  }

  setImages() {
    document.getElementById('hero__images').value = this.hero.images;
  }

  setView() {
    this.setTitle();
    this.setId();
    this.setName();
    this.setSlug();
    this.setPowerstats();
    this.setAppeareance();
    this.setBiography();
    this.setWork();
    this.setConnections();
    this.setImages();
  }
}

module.exports = DetailsPage;
