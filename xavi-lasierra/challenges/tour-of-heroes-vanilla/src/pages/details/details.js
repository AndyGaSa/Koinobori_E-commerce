const id = getId(window.location.search); // create getId(location.search)
const detail = new DetailsPage(id, heroes);
detail.setView();
