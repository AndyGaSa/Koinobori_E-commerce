class DashboardPage {
  constructor(superHeroes) {
    this.superHeroes = superHeroes;
  }

  paintDashboard() {
    this.superHeroes.forEach((hero) => {
      const element = document.createElement('a');
      element.href = `../details/details.html?id=${hero.id}`;
      element.innerText = hero.name;
      const parentElement = document.getElementById('dashboard__heroes');
      parentElement.appendChild(element);
    });
  }
}
