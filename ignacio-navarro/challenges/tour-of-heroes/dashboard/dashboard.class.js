class DashboardHeroClass {
  constructor(hero, initialPos, numberOfHeroes) {
    this.topPositions = [];
    for (let position = initialPos; position < initialPos + numberOfHeroes; position += 1) {
      this.topPositions.push({ id: hero[position].id, superhero: hero[position].superhero });
    }
  }

  buildHero() {
    const dashboardCardDOM = document.getElementById('dashboard__cards');
    this.topPositions.forEach((hero) => {
      const dashboardHeroCard = document.createElement('a');
      dashboardHeroCard.setAttribute('href', `../details/hero-details.html?id=${hero.id}`);
      dashboardHeroCard.classList.add('dashboard__card');
      dashboardHeroCard.innerHTML = hero.superhero;
      dashboardCardDOM.appendChild(dashboardHeroCard);
    });
  }
}
