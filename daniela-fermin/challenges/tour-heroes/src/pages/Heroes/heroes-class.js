class HeroesPage {
  constructor(heroes) {
    this.heroList = [];

    for (let heroIndex = 0;
      heroIndex < heroes.length; heroIndex += 1) {
      this.heroList.push({ id: heroes[heroIndex].id, superhero: heroes[heroIndex].superhero });
    }
  }

  paintAllHeroes() {
    for (let heroNewIndex = 0;
      heroNewIndex < this.heroList.length; heroNewIndex += 1) {
      const allHeroesDiv = document.getElementById('heroes-list--total');
      const heroesLink = document.createElement('a');
      heroesLink.innerHTML = `<span class='badge'>${this.heroList[heroNewIndex].id},</span>${this.heroList[heroNewIndex].id}`;
      heroesLink.setAttribute('href', `../Details/details.html?id=${this.heroList[heroNewIndex].id}`);
      heroesLink.setAttribute('class', 'heroes');
      allHeroesDiv.append(heroesLink);
    }
  }
}
