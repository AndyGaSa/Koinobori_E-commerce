class DashboardPage {
  constructor(heroes, startPosition, numberOfHeroes) {
    this.heroDashBoardList = [];
    for (let i = startPosition; i < startPosition + numberOfHeroes; i += 1) {
      this.heroDashBoardList.push(heroes[i]);
    }
  }

  setView() {
    for (let i = 0; i < this.heroDashBoardList.length; i += 1) {
      const element = document.createElement('a');
      element.setAttribute('href', `../details/details.html?id=${this.heroDashBoardList[i].id}`);
      element.innerHTML = this.heroDashBoardList[i].superhero;
      document.getElementById('hero-list').append(element);
    }
  }
}

module.exports = DashboardPage;
