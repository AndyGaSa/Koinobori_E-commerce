class Dashboard {
  constructor(heroes, initialPosition, numberOfHeroes) {
    this.topHeroes = [];

    for (let heroIndex = initialPosition;
      heroIndex < initialPosition + numberOfHeroes; heroIndex += 1) {
      this.topHeroes.push({ id: heroes[heroIndex].id, superhero: heroes[heroIndex].superhero });
    }
  }

  paintTopHeroes() {
    for (let heroNewIndex = 0;
      heroNewIndex < this.topHeroes.length; heroNewIndex += 1) {
      const topHeroesDiv = document.getElementById('top-heroes__list');
      const heroLink = document.createElement('a');
      heroLink.innerHTML = this.topHeroes[heroNewIndex].superhero;
      heroLink.setAttribute('href', `../Details/details.html?id=${this.topHeroes[heroNewIndex].id}`);
      topHeroesDiv.append(heroLink);
    }
  }
}
