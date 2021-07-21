(function detailsPageModel() {
    const {heroId, slug} = transformUrlQueryToObject(window.location.search);
    const detail = new DetailsPage(+heroId, slug, heroes);
    detail.setView();
  }());





