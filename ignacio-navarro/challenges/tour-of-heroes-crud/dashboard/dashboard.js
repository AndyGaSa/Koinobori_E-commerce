
(function printDashboardCard() {
  if(!localStorage.getItem("heroes")){localStorage.setItem("heroes", JSON.stringify(HEROES_LIST))}
  const print = new DashboardCard(storage);
  print.setViews();
}());
