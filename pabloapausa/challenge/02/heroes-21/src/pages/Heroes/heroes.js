/*(function heroesPageModel() {
  const heroesPage = new HeroesPage(heroes);
  heroesPage.setView();
}()); */

let heroes;
let httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', '../../../superHeroData.json');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      heroes = JSON.parse(httpRequest.responseText);
      const heroesPage = new HeroesPage(heroes);
      heroesPage.setView();
    } else {
      alert('There was a problem with the request.');
    }
  }
}