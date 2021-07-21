(function dashboardPageModel() {
  if (localStorage.setItem('heroes' === null) {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  };
  const dashboardPage = new DashboardPage(heroes.slice(1, 5));
  dashboardPage.setView();
}());
