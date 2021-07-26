(function dashboardPageModel() {
  const dashboardPage = new DashboardPage();
  const heroes = JSON.parse(localStorage.getItem('heroes'));

  if (heroes.length) {
    dashboardPage.setHeroes();
    dashboardPage.setView();
  } else {
    getHeroes().then((myHeroes) => {
      localStorage.setItem('heroes', JSON.stringify(myHeroes));

      dashboardPage.setHeroes();
      dashboardPage.setView();
    });
  }
}());
