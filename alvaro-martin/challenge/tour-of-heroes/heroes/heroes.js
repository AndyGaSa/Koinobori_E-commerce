// (function () {
let httpRequest;
document.getElementById('lista-button').addEventListener('click', makeRequest);

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', '../superHeroData.json');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      localStorage.setItem('heroes', httpRequest.responseText);
      const heroes1 = JSON.parse(httpRequest.responseText);
      const cosa = new HeroesPage(heroes1);
      cosa.setView();
    } else {
      alert('There was a problem with the request.');
    }
  }
}
// heroes = localStorage.setItem('heroes', JSON.stringify(heroes));

if (!localStorage.getItem('heroes')) {
  localStorage.setItem('heroes', JSON.stringify(heroesLocal));
}
const heroes = heroes1;
