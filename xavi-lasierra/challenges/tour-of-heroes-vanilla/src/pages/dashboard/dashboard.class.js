class DashboardPage {
  constructor(heroes) {
    this.heroDashBoardList = heroes;
  }

  setView() {
    this.heroDashBoardList.forEach((hero) => {
      const element = document.createElement('a');
      element.href = `../details/details.html?slug=${hero.slug}`;
      element.innerText = hero.name;
      document.getElementById('hero-list').appendChild(element);
    });
  }
}

module.exports = DashboardPage;
