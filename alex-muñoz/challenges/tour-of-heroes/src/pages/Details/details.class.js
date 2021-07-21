class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
  }

  setId() {
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }

  setName() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__name').value = this.hero.name;
  }

  setSlug() {
    document.getElementById('hero__slug').innerHTML = this.hero.slug;
  }

  setPowerstats() {
    const parentElement = document.getElementById('hero__powerstats');
    const { powerstats } = this.hero;
    const stats = Object.entries(powerstats);
    stats.forEach((stat) => {
      const elements = document.createElement('li');
      elements.innerHTML = `${stat[0]}: ${stat[1]}`;
      parentElement.appendChild(elements);
    });
  }

  setAppearance() {
    const parentElement = document.getElementById('hero__appearance');
    const { appearance } = this.hero;
    const stats = Object.entries(appearance);
    stats.forEach((stat) => {
      const elements = document.createElement('li');
      elements.innerHTML = `${stat[0]}: ${stat[1]}`;
      parentElement.appendChild(elements);
    });
  }

  setBiography() {
    const parentElement = document.getElementById('hero__biography');
    const { biography } = this.hero;
    const stats = Object.entries(biography);
    stats.forEach((stat) => {
      const elements = document.createElement('li');
      elements.innerHTML = `${stat[0]}: ${stat[1]}`;
      parentElement.appendChild(elements);
    });
  }

  setWork() {
    const parentElement = document.getElementById('hero__work');
    const { work } = this.hero;
    const stats = Object.entries(work);
    stats.forEach((stat) => {
      const elements = document.createElement('li');
      elements.innerHTML = `${stat[0]}: ${stat[1]}`;
      parentElement.appendChild(elements);
    });
  }

  setConnections() {
    const parentElement = document.getElementById('hero__connections');
    const { connections } = this.hero;
    const stats = Object.entries(connections);
    stats.forEach((stat) => {
      const elements = document.createElement('li');
      elements.innerHTML = `${stat[0]}: ${stat[1]}`;
      parentElement.appendChild(elements);
    });
  }

  setImages() {
    const parentElement = document.getElementById('hero__images');

    const elements = document.createElement('img');
    elements.src = this.hero.images.sm;
    elements.alt = `${this.hero.name}image`;
    parentElement.appendChild(elements);
  }

  setView() {
    this.setId();
    this.setName();
    this.setSlug();
    this.setPowerstats();
    this.setAppearance();
    this.setBiography();
    this.setWork();
    this.setConnections();
    this.setImages();
  }
}

module.exports = DetailsPage;
