class DashboardPage {
  constructor() {
    this.heroes = [];
  }

  setHeroes() {
    this.heroes = JSON.parse(localStorage.getItem('heroes')).slice(1, 5);
  }

  setView() {
    this.heroes.forEach((hero) => {
      const element = document.createElement('a');
      element.href = `../Details/details.html?heroId=${hero.id}`;
      element.innerText = hero.name;

      const parentElement = document.getElementById('dashboard__heroes');
      parentElement.appendChild(element);
    });
  }
}
