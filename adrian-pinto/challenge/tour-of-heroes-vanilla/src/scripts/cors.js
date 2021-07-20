/**
* Funcion que crea una promesa con una Peticion XML contra la API que indiquemos en 'url'
* @param {String} url Indicamos la direccion del recurso que queremos pedir a la API
*/
const newXHR = (apiUrl) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  xhr.onloadend = () => { resolve(this.response); };
  // eslint-disable-next-line no-console
  xhr.onerror = () => { reject(console.error('La solicitud no a podido ser resuelta')); };
  xhr.send();
});

export default newXHR();
