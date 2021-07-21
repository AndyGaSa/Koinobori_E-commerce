class DashboardPage {
    constructor(heroes) {
      this.heroDashBoardList = heroes;
    }
  
    setView() {
      this.heroDashBoardList.forEach((hero) => {
        const element = document.createElement('a');
        element.href = `../details/details.html?heroId=${hero.id}`;
        element.innerText = hero.name;
        const parentElement = document.getElementById('dashboard__heroes');
        parentElement.appendChild(element);
      });
    }
  }

  module.exports = DashboardPage;