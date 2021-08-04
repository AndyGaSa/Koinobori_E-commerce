/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
const container = document.getElementById('select-container');
const items = container.getElementsByTagName('ul')[0].getElementsByTagName('li');
const selectedItem = items[0];

function showUnselected() {
  const selectedLangCode = selectedItem.getAttribute('lang-selection');

  for (let i = 1; i < items.length; i += 1) {
    if (items[i].getAttribute('lang-selection') == selectedLangCode) {
      items[i].style.opacity = '1';
      items[i].style.display = '';
      break;
    }
  }
}

function unwrapSelector() {
  container.style.pointerEvents = 'none';
  setTimeout(() => container.style.pointerEvents = 'auto', 200);
}

function hideSelected() {
  const selectedLangCode = selectedItem.getAttribute('lang-selection');

  for (let i = 1; i < items.length; i += 1) {
    if (items[i].getAttribute('lang-selection') == selectedLangCode) {
      items[i].style.opacity = '0';
      setTimeout(() => items[i].style.display = 'none', 200);
      break;
    }
  }
}
function onSelect(item) {
  showUnselected();
  selectedItem.innerHTML = item.innerHTML;
  selectedItem.setAttribute('lang-selection', item.getAttribute('lang-selection'));
  selectedItem.setAttribute('tooltip', item.getAttribute('tooltip'));
  hideSelected();
  unwrapSelector();
}

hideSelected();
