const dashBoardPage = new DashboardPage(JSON.parse(localStorage.getItem('heroes')).slice(1, 5));
// funtion threw when the html is loaded.
(function dashBoardPageModel() {
  dashBoardPage.setview();
}());

function showSearch(searchArray) {
  searchArray.forEach((item) => {
    const parentElement = document.getElementById('search-result');
    const domParagraph = document.createElement('p');
    //
    domParagraph.innerText = item;
    parentElement.appendChild(domParagraph);
  });

  function searchHero() {
    const domInput = document.getElementById('search-hero');
    //
    if (domInput.value.length <= 0) {
      alert('You have to write a name to search something.');
    } else {
      const searchResult = DashboardPage.dashBoardHeros.filter();
      if (searchResult.length <= 0) {
        alert('No data found.');
      } else {
        showSearch(searchResult);
      }
    }
  }
}
