(function printDashboardCard() {
  if (!localStorage.getItem('heroes')) { makeRequest(); }
  const print = new DashboardCard(storage);
  print.setViews();
}());
