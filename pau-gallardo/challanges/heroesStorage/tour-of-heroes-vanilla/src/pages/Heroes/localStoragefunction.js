let heroes;
let lastId;
let httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', './superHeroData.json');
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

/*
(function localStorageFunction() {
  if (!localStorage.getItem('heroes')) {
    lastId = reversedArray[0].id;
    localStorage.setItem('lastId', JSON.stringify(lastId));
    localStorage.setItem('heroes', JSON.stringify(heroesMyPc.reverse()));
  }
  heroes = JSON.parse(localStorage.getItem('heroes'));
  lastId = JSON.parse(localStorage.getItem('lastId'));
}());
*/
