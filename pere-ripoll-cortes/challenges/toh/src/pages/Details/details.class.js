class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes?.find((hero) => hero.id === id);
    this.herocomplete = heroes;
  }

  setId() {
    document.getElementById('hero__id').innerHTML = this.hero.id;
  }

  setName() {
    document.getElementById('hero__name').value = this.hero.name;
    document.getElementById('hero__title').innerHTML = this.hero.name;
  }

  setSlug() {
    document.getElementById('hero__slug').innerHTML = this.hero.slug;
  }

  setPowerstats() {
    const parentEl = document.getElementById('hero__powerstats');
    for (const key in this.hero.powerstats) {
      if (Object.keys(this.hero.powerstats, key)) {
        const el = document.createElement('ul');
        parentEl.appendChild(el);
        el.innerText = `${key}: ${this.hero.powerstats[key]}`;
      }
    }
  }

  setAppearance() {
    const parentEl = document.getElementById('hero__appearance');
    for (const key in this.hero.appearance) {
      if (Object.keys(this.hero.appearance, key)) {
        const el = document.createElement('ul');
        parentEl.appendChild(el);
        el.innerText = `${key}: ${this.hero.appearance[key]}`;
      }
    }
  }

  setBiography() {
    const parentEl = document.getElementById('hero__biography');
    for (const key in this.hero.biography) {
      if (Object.keys(this.hero.biography, key)) {
        const el = document.createElement('ul');
        parentEl.appendChild(el);
        el.innerText = `${key}: ${this.hero.biography[key]}`;
      }
    }
  }

  setWork() {
    const parentEl = document.getElementById('hero__work');
    for (const key in this.hero.work) {
      if (Object.keys(this.hero.work, key)) {
        const el = document.createElement('ul');
        parentEl.appendChild(el);
        el.innerText = `${key}: ${this.hero.work[key]}`;
      }
    }
  }

  setConnections() {
    const parentEl = document.getElementById('hero__connections');
    for (const key in this.hero.connections) {
      if (Object.keys(this.hero.connections, key)) {
        const el = document.createElement('ul');
        parentEl.appendChild(el);
        el.innerText = `${key}: ${this.hero.connections[key]}`;
      }
    }
  }

  setImages() {
    const parentEl = document.getElementById('hero__images');
    for (const key in this.hero.images) {
      if (Object.keys(this.hero.images, this.hero.images[key])) {
        const el = document.createElement('img');
        el.src = this.hero.images[key];
        parentEl.appendChild(el);
      }
    }
  }

  readValues(value) {
    this.herocomplete.forEach((element) => {
      if (element.name === value) {
        const a = new DetailsPage(element.id, this.herocomplete);
        a.setView();
      }
    });
  }

  setView() {
    this.setId();
    this.setName();
    this.setPowerstats();
    this.setSlug();
    this.setWork();
    this.setAppearance();
    this.setBiography();
    this.setConnections();
    this.setImages();
  }
}

module.exports = DetailsPage;
