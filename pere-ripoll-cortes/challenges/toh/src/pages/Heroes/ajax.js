let httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', '../../superHeroData.json');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      // console.log(JSON.parse(httpRequest.responseText));
      JSON.parse(localStorage.setItem('superHeroData', httpRequest.responseText));
      // localStorage.setItem('superHero', JSON.parse(httpRequest.responseText));
    } else {
      alert('There was a problem with the request.');
    }
  }
}
