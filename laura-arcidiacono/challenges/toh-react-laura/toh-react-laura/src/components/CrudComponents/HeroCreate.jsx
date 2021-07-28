/* Coments to understad:
Importa dos tipos de hook: useState y useRef. */

/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';

/* Declara la funcion, y le pasa 4 props: la constante heroes, el numero maximo de Id,
y dos set que luego utiliza al definir la contante newHero. */
export default function HeroCreate({
  heroes, setHeroes, maxId, setMaxId
}) {
  /* Declara una constante de estado que inicializa en una cadena vacía.
El nombre de la constante de estado será newHeroName, y la funcion setNewHeroName
es la que le va a cambiar el estado. */
  const [newHeroName, setNewHeroName] = useState('');
  const newHeroInput = useRef(); /* Decalara una constante de referencia, newHeroInput. */

  /* Declara una funcion dentro del scope de la funcion HeroCreate, y la llama addHeroName.
Le pasa como prop heroName (que entiendo que será el valor ingresado en el input).
En esta funcion declara una const newHero que apunta a un objeto que tendrá dos propiedades:
id: que apunta al valor de maxId,
name: que apunta al valor de heroName.
luego con setHeroes le asigna a newHero todas las propiedades de los heroes y las de newHero.
Y con setMaxId le asigna el valor de id sumando 1 al valor máximo. */
  function addNewHero(heroName) {
    const newHero = {
      id: maxId,
      name: heroName.trim()
    };
    setHeroes([...heroes, newHero]);
    setMaxId(maxId + 1);
  }

  /* Por ultimo pinta:
-Label con el texto: Hero name, para el input.
-Un input de tipo texto, que hara referencia al newHeroInput, le otorga name e id,
y le asigna un comportamiento onChangepasandole como prop a setNewHeroName el valor actual
del input newHeroInput(que era lo que estaba como referencia).
-Un button de tipo button, al que le asigna un comportamiento onClick al que le pasa como callback
la funcion addHeroName con el argumento newHeroName que es la constante de estado.
*/
  return (
    <label htmlFor="hero__create">
      Hero name:
      <input type="text" ref={newHeroInput} name="hero__create" id="hero__create" onChange={() => setNewHeroName(newHeroInput.current.value)} />
      <button type="button" onClick={() => addNewHero(newHeroName)}> Add hero</button>
    </label>
  );
}
