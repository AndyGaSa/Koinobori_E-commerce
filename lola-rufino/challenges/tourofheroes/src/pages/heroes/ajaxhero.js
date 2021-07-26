let httpRequest;
let newSuperHeroes;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cant create XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', '../../../superHeroData.json', true);
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      newSuperHeroes = JSON.parse(httpRequest.responseText);
      const heroesPage = new HeroesPage(newSuperHeroes);
      localStorage.setItem('newSuperHeroes', JSON.stringify(newSuperHeroes));
      heroesPage.setView();
    } else {
      alert('There was a problem with the request');
    }
  }
}

newSuperHeroes = JSON.parse(localStorage.getItem('newSuperHeroes'));
