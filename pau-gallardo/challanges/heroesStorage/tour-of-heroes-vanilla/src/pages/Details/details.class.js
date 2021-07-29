class DetailsPage {
  constructor(hero) {
    this.hero = hero;
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__id').innerHTML = this.hero.id;
    document.getElementById('hero__name').value = this.hero.name;
    document.getElementById('hero__slug').innerHTML = this.hero.slug;
    this.setPowerStats();
    this.setAppereance();
    this.setBiography();
    this.setWork();
    this.setConnections();
    this.setImage();
  }

  setPowerStats() {
    const entriesObj = Object.entries(this.hero.powerstats);
    const parent = document.getElementById('hero__powerstats');
    for (let i = 0; i < entriesObj.length; i += 1) {
      const element = `<li><span>${entriesObj[i][0]}: </span><span>${entriesObj[i][1]}</span></li><ul id="hero__powerstats__li"></ul>`;
      parent.innerHTML += element;
    }
  }

  setAppereance() {
    const entriesObj = Object.entries(this.hero.appearance);
    const parent = document.getElementById('hero__appereance');
    for (let i = 0; i < entriesObj.length; i += 1) {
      const element = `<li><span>${entriesObj[i][0]}: </span><span>${entriesObj[i][1]}</span></li>`;
      parent.innerHTML += element;
    }
  }

  setBiography() {
    const entriesObj = Object.entries(this.hero.biography);
    const parent = document.getElementById('hero__biography');
    for (let i = 0; i < entriesObj.length; i += 1) {
      const element = `<li><span>${entriesObj[i][0]}: </span><span>${entriesObj[i][1]}</span></li>`;
      parent.innerHTML += element;
    }
  }

  setWork() {
    const entriesObj = Object.entries(this.hero.work);
    const parent = document.getElementById('hero__work');
    for (let i = 0; i < entriesObj.length; i += 1) {
      const element = `<li><span>${entriesObj[i][0]}: </span><span>${entriesObj[i][1]}</span></li>`;
      parent.innerHTML += element;
    }
  }

  setConnections() {
    const entriesObj = Object.entries(this.hero.connections);
    const parent = document.getElementById('hero__connections');
    for (let i = 0; i < entriesObj.length; i += 1) {
      const element = `<li><span>${entriesObj[i][0]}: </span><span>${entriesObj[i][1]}</span></li>`;
      parent.innerHTML += element;
    }
  }

  setImage() {
    const parent = document.getElementById('hero__images');
    parent.src = this.hero.images.md;
  }
}

module.exports = DetailsPage;
