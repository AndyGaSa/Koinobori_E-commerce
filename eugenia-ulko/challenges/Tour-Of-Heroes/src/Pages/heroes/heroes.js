(function heroesPageModel() {
  const heroesPage = new HeroesPage(heroes);
  heroesPage.setView();
}());

function makeRequest() {
  httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert("Cannot create XML");
    return false;
  }
}

httpRequest.onreadystatechange = alertContents;
httpRequest.open('GET', ............);

httpRequest.send();
}

function alertContents() {
  if(httpRequest.readyState === XMLHttpRequest.DONE) {
   if (httpRequest.status === 200) {
    
  }
}
