(function dashboardPageModel() {
  const dashboardPage = new DashboardPage(heroesStorage.slice(1, 5));
  dashboardPage.setView();
}());