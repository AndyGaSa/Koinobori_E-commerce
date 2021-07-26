class DashboardPage {
  constructor(heroes, startPosition, numberOfHeroes) {
    this.heroDashBoardList = [];
    for (let i = startPosition; i < startPosition + numberOfHeroes; i += 1) {
      this.heroDashBoardList.push({ id: heroes[i].id, superhero: heroes[i].superhero });
    }
  }

  setView() {
    this.heroDashBoardList.forEach((hero) => {
      const element = document.createElement('a');
      element.setAttribute('href', `../details/details.html?id=${hero.id}`);
      element.innerHTML = hero.superhero;
      document.getElementById('hero-list').append(element);
    });
  }
}

module.exports = DashboardPage;
