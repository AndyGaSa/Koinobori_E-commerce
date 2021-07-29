let httpRequest;

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert('Heroes Loaded from JSON');
      localStorage.setItem('heroes', httpRequest.responseText);
      alert('Heroes Loaded To Storage');
      loadHeroes();
      saveBiggestIndex();
    } else {
      alert('There was a problem with the request.');
    }
  }
}
function jsonRequest() {
  if (confirm('Are you sure you want to reload heroes?')) {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', '../../superHeroData.json');
    httpRequest.send();
  } else {
    alert('Load cancelled.');
  }
}
