const detailsPage = new DetailsPage(getIdFromURL(location.search), hostedHeroes);

detailsPage.setView();
detailsPage.setPowerStats();
detailsPage.setAppearance();
detailsPage.setBiography();
detailsPage.setWork();
detailsPage.setConnections();
