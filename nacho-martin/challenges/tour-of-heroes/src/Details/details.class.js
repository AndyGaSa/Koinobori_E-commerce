class DetailsPage {
  constructor(id, heroes) {
    this.id = id;
    this.hero = heroes.find((hero) => hero.id === id);
  }

  setView() {
    document.getElementById('hero__title').innerHTML = this.hero.name;
    document.getElementById('hero__id').innerHTML = this.hero.id;
    document.getElementById('hero__name').value = this.hero.name;
    document.getElementById('hero__image').src = this.hero.images.sm;
  }

  setPowerStats() {
    const page = document.getElementById('hero__powerstats');
    const statistics = this.hero.powerstats;
    const entries = Object.entries(statistics);
    entries.forEach((entry) => {
      const stat = document.createElement('li');
      stat.innerHTML = `${entry[0]}: ${entry[1]}`;
      page.append(stat);
    });
  }

  setAppearance() {
    const page = document.getElementById('hero__appearance');
    const { appearance } = this.hero;
    const entries = Object.entries(appearance);
    entries.forEach((entry) => {
      const trait = document.createElement('li');
      trait.innerHTML = `${entry[0]}: ${entry[1]}`;
      page.append(trait);
    });
  }

  setBiography() {
    const page = document.getElementById('hero__biography');
    const { biography } = this.hero;
    const entries = Object.entries(biography);
    entries.forEach((entry) => {
      const data = document.createElement('li');
      data.innerHTML = `${entry[0]}: ${entry[1]}`;
      page.append(data);
    });
  }

  setWork() {
    const page = document.getElementById('hero__work');
    const { work } = this.hero;
    const entries = Object.entries(work);
    entries.forEach((entry) => {
      const data = document.createElement('li');
      data.innerHTML = `${entry[0]}: ${entry[1]}`;
      page.append(data);
    });
  }

  setConnections() {
    const page = document.getElementById('hero__connections');
    const { connections } = this.hero;
    const entries = Object.entries(connections);
    entries.forEach((entry) => {
      const data = document.createElement('li');
      data.innerHTML = `${entry[0]}: ${entry[1]}`;
      page.append(data);
    });
  }
}

module.exports = DetailsPage;
