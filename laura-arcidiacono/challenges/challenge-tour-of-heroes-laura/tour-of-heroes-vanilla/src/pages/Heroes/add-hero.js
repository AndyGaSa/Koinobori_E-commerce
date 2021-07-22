/* const myAddButton = document.getElementById('add-hero');
myAddButton.addEventListener('click', addHeroButton()); */

getHeroDetails(heroes) {
    const result = heroes.find((obj) => obj.id === Number(this.id));
    return result;
  }