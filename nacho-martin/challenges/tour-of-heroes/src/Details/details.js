const detailsPage = new DetailsPage(getIdFromURL(location.search), heroes);

detailsPage.setView();
detailsPage.setPowerStats();
detailsPage.setAppearance();
detailsPage.setBiography();
detailsPage.setWork();
detailsPage.setConnections();
