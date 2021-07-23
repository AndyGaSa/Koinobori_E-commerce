function dropdownbutton() {
  document.getElementById('myDropdown').classList.toggle('show');
}
window.onclick = function (event) {
  if (!event.target.matches('.drop__btn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i += 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
