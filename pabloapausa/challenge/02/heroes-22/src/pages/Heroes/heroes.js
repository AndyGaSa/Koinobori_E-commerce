let heroes;
let httpRequest;

function alertContents() {
  if (httpRequest.readyState !== XMLHttpRequest.DONE) return;
  if (httpRequest.status !== 200) return alert('There was a problem.');
  heroes = JSON.parse(httpRequest.responseText);
  const heroesPage = new HeroesPage(heroes);
  heroesPage.setView();
}

function failedRequest() {
  alert('Giving up :( Cannot create an XMLHTTP instance');
  return false;
}

function makeRequest() {
  httpRequest = new XMLHttpRequest();
  if (!httpRequest) return failedRequest();
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', '../../superHeroData.json');
  httpRequest.send();
}
