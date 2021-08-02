/* eslint-disable no-unused-vars */
function checkStorage(storageKey) {
  // Check if we have something on the storage. If not, we send a warning to the user.
  if (localStorage.getItem(storageKey) === null) {
    alert('No data on the storage. Reload it.');
    return false;
  }
  return true;
}

function getStorageParse(storageKey) {
  return JSON.parse(localStorage.getItem(storageKey));
}

function getStorage(storageKey) {
  return localStorage.getItem(storageKey);
}

function setStorage(storageKey, value) {
  localStorage.setItem(storageKey, value);
}
