/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import newXHR from '../scripts/ajax-api.js';
import callHeroe from '../scripts/fetch-api.js';

const printCall = (heroesForPrint, outElement) => {
  outElement.innerHTML = '';
  if (!heroesForPrint.length) {
    outElement.innerHTML += `<li>Hero name: ${heroesForPrint.name}</li>`;
  } else {
    heroesForPrint.forEach((heroe) => {
      outElement.innerHTML += `<li>Hero name: ${heroe.name}</li>`;
    });
  }
};

const handleInput = (inputElement) => {
  const inputValue = inputElement.value.split(',');
  inputElement.value = '';
  return inputValue;
};

const callHeroesOverAjax = async (inputElement) => {
  const outElement = document.getElementsByTagName('ul')[0];
  const requestValues = handleInput(inputElement);
  const heroResponse = JSON.parse(await newXHR(requestValues[0], requestValues[1]));
  printCall(heroResponse, outElement);
};

const callHeroesOverFetch = async (inputElement) => {
  const outElement = document.getElementsByTagName('ul')[0];
  const requestValues = handleInput(inputElement);
  const heroResponse = await callHeroe(requestValues[0], requestValues[1]).then((e) => e.json);
  printCall(heroResponse, outElement);
};

const attachEvents = (elements) => {
  const input = document.getElementsByTagName('input')[0];
  elements[0].addEventListener('click', () => callHeroesOverAjax(input));
  elements[1].addEventListener('click', () => callHeroesOverFetch(input));
};

attachEvents(document.getElementsByTagName('button'));
