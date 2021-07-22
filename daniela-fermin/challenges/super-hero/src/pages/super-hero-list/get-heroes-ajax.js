let httpRequest;
function getHeroes() {
  makeRequest();
}

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
      superHeroes = (JSON.parse(httpRequest.responseText));
      document.getElementById('new-hero').value = ('');
      heroesPage.paintAllHeroes(superHeroes);
      uploadToLocalStorage();
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function uploadToLocalStorage() {
  if (localStorage.getItem('superHeroes') === null) {
    superHeroes = [];
    localStorage.setItem('superHeroes', JSON.stringify(superHeroes));

    localStorage.setItem('superHeroesMaxId', getMaxId(superHeroesPredefined));
  }
  superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
}
