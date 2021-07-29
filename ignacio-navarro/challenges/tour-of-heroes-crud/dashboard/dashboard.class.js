class DashboardCard {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setViews() {
    console.log('hola');
    this.heroes.slice(0,4).forEach((hero) => {
      const element = document.createElement('a');
      element.href = (`../details/details.html?heroId=${hero.id}`);
      element.innerHTML = hero.name;
      const dashboardDOM = document.getElementById('dashboard');
      dashboardDOM.appendChild(element);
    });
  }
}
