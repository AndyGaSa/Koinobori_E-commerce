let httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = heroesContents;
  httpRequest.open('GET', '../../superHeroData.json');
  httpRequest.send();
}

function heroesContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      heroes = JSON.parse(httpRequest.responseText);
      saveHeroes(heroes);
      saveMaxId(getMaxId(heroes));
      heroList = new HeroesPage(heroes);
      heroList.setView();
    } else {
      alert('There was a problem with the request.');
    }
  }
}
