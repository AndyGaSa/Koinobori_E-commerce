class DashboardPage {
  constructor(heroes) {
    this.heroDashBoardList = heroes;
  }

  setView() {
    this.heroDashBoardList.forEach((hero) => {
      const element = document.createElement('a');
      element.href = `../details/details.html?id=${hero.id}`;
      element.innerText = hero.superhero;
      document.getElementById('hero-list').appendChild(element);
    });
  }
}

module.exports = DashboardPage;
