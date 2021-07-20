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

  setPowerStats() {
    const parentElement = document.getElementById('hero__powerstats');

    for (const property in this.hero.powerstats) {
      const element = document.createElement('li');
      element.innerText = `${property}: ${this.hero.powerstats[property]}`;
      parentElement.appendChild(element);
    }
  }

  setAppearance() {
    const parentElement = document.getElementById('hero__appearance');

    for (const property in this.hero.appearance) {
      const element = document.createElement('li');
      element.innerText = `${property}: ${this.hero.appearance[property]}`;
      parentElement.appendChild(element);
    }
  }

  setBiography() {
    const parentElement = document.getElementById('hero__biography');

    for (const property in this.hero.biography) {
      const element = document.createElement('li');
      element.innerText = `${property}: ${this.hero.biography[property]}`;
      parentElement.appendChild(element);
    }
  }

  setWork() {
    const parentElement = document.getElementById('hero__work');

    for (const property in this.hero.work) {
      const element = document.createElement('li');
      element.innerText = `${property}: ${this.hero.work[property]}`;
      parentElement.appendChild(element);
    }
  }

  setConnections() {
    const parentElement = document.getElementById('hero__connections');

    for (const property in this.hero.connections) {
      const element = document.createElement('li');
      element.innerText = `${property}: ${this.hero.connections[property]}`;
      parentElement.appendChild(element);
    }
  }

  setImage() {
    const parentElement = document.getElementById('hero__image');
    const element = document.createElement('img');
    element.src = this.hero.images.md;
    parentElement.appendChild(element);
  }

  setView() {
    this.setId();
    this.setName();
    this.setSlug();
    this.setPowerStats();
    this.setAppearance();
    this.setBiography();
    this.setWork();
    this.setConnections();
    this.setImage();
  }
}

module.exports = DetailsPage;
