const id = getId(window.location.search);
const details = new DetailsPage(id, heroes);
details.paintSingleHero();
