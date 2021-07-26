class DetailsPage {
  constructor(id, newSuperHeroes) {
    this.id = id;
    this.hero = newSuperHeroes?.find((hero) => hero.id === id);
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
    const powerstatProperty = Object.keys(this.hero.powerstats);

    powerstatProperty.forEach((powerstatKey) => {
      const element = document.createElement('li');
      element.innerText = `${powerstatKey}: ${this.hero.powerstats[powerstatKey]}`;
      parentElement.appendChild(element);
    });
  }

  setAppearance() {
    const parentElement = document.getElementById('hero__appearance');
    const appearanceProperty = Object.keys(this.hero.appearance);

    appearanceProperty.forEach((appearanceKey) => {
      const element = document.createElement('li');
      element.innerText = `${appearanceKey}: ${this.hero.appearance[appearanceKey]}`;
      parentElement.appendChild(element);
    });
  }

  setBiography() {
    const parentElement = document.getElementById('hero__biography');
    const biographyProperty = Object.keys(this.hero.biography);

    biographyProperty.forEach((biographyKey) => {
      const element = document.createElement('li');
      element.innerText = `${biographyKey}: ${this.hero.biography[biographyKey]}`;
      parentElement.appendChild(element);
    });
  }

  setWork() {
    const parentElement = document.getElementById('hero__work');
    const workProperty = Object.keys(this.hero.work);

    workProperty.forEach((workKey) => {
      const element = document.createElement('li');
      element.innerText = `${workKey}: ${this.hero.work[workKey]}`;
      parentElement.appendChild(element);
    });
  }

  setConnections() {
    const parentElement = document.getElementById('hero__connections');
    const connectionsProperty = Object.keys(this.hero.connections);

    connectionsProperty.forEach((connectionsKey) => {
      const element = document.createElement('li');
      element.innerText = `${connectionsKey}: ${this.hero.connections[connectionsKey]}`;
      parentElement.appendChild(element);
    });
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
