class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  getHeroDetails(heroes) {
    const result = heroes.find((obj) => obj.id === Number(this.id));
    return result;
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
    const parentElement = document.getElementById('hero__powerstats');
    for (const key in this.hero.powerstats) {
      const element = document.createElement('li');
      parentElement.appendChild(element);
      element.innerHTML = `${key}: ${this.hero.powerstats[key]}`;
    }
  }

  setApperance() {
    const parentElement = document.getElementById('hero__appearance');
    for (const key in this.hero.appearance) {
      const element = document.createElement('li');
      parentElement.appendChild(element);
      element.innerHTML = `${key}: ${this.hero.appearance[key]}`;
    }
  }

  setBiography() {
    const parentElement = document.getElementById('hero__biography');
    for (const key in this.hero.biography) {
      const element = document.createElement('li');
      parentElement.appendChild(element);
      element.innerHTML = `${key}: ${this.hero.biography[key]}`;
    }
  }

  setWork() {
    const parentElement = document.getElementById('hero__work');
    for (const key in this.hero.work) {
      const element = document.createElement('li');
      parentElement.appendChild(element);
      element.innerHTML = `${key}: ${this.hero.work[key]}`;
    }
  }

  setConnections() {
    const parentElement = document.getElementById('hero__connections');
    for (const key in this.hero.connections) {
      const element = document.createElement('li');
      parentElement.appendChild(element);
      element.innerHTML = `${key}: ${this.hero.connections[key]}`;
    }
  }

  setImages() {
    const parentElement = document.getElementById('hero__images');
    const element = document.createElement('img');
    parentElement.appendChild(element);
    element.src = this.hero.images.sm;
  }

  setView() {
    this.setTitle();
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
