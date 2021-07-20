const { id } = transformUrlQueryToObject(window.location.search);
const detail = new DetailsPage(id, heroes);
detail.setView();
