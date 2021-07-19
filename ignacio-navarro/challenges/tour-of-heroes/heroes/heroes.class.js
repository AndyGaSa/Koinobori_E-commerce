class HeroesListClass {
  constructor(heroesArray) {
    this.heroes = [];
    for (let currentHero = 0; currentHero < heroesArray.length; currentHero += 1) {
      this.heroes.push({
        id: heroesArray[currentHero].id,
        superhero: heroesArray[currentHero].superhero,
      });
    }
  }

  buildHeroList() {
    const heroesListElement = document.getElementById('heroes__list');
    this.heroes.forEach((hero) => {
      const heroesListLink = document.createElement('a');
      heroesListLink.setAttribute('href', `../details/hero-details.html?id=${hero.id}`);
      heroesListLink.innerHTML = hero.superhero;
      heroesListElement.appendChild(heroesListLink);
    });
  }
}
