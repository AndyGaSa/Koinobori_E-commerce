(function dashboardPageModel() {
  const heroes = JSON.parse(localStorage.getItem('heroes'));
  const dashboardPage = new DashboardPage(heroes.slice(1, 5));
  dashboardPage.setView();
}());
