class HeroesPage {
  constructor(heroes) {
    this.heroList = [];
    for (let i = 0; i < heroes.length; i += 1) {
      this.heroList.push({ id: heroes[i].id, superhero: heroes[i].superhero });
    }
  }

  setView() {
    for (let i = 0; i < this.heroList.length; i += 1) {
      const element = document.createElement('a');
      element.setAttribute('href', `../details/details.html?id=${this.heroList[i].id}`);
      element.setAttribute('class', 'heroes');
      element.innerHTML = `<span class="badge">${this.heroList[i].id}</span>${this.heroList[i].superhero}`;
      document.getElementById('hero-list').append(element);
    }
  }
}

module.exports = HeroesPage;
