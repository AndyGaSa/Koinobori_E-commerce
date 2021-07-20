class DashboardPage {
  constructor(dashboardHeros) {
    this.dashBoardHeros = dashboardHeros;
  }

  setview() {
    this.dashBoardHeros.forEach((hero) => {
      const parentElement = document.getElementById('heroes-menu');
      const domAnchor = document.createElement('a');
      //
      domAnchor.href = `../Details/details.html?id=${hero.id}`;
      domAnchor.innerText = hero.name;
      parentElement.appendChild(domAnchor);
    });
  }
}
