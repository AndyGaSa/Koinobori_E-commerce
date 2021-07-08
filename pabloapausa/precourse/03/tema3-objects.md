# TEMA 3 - OBJECTS


## Documentación

● [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Ejercicios

● From [Build Javascript Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/) to [Accessing Nested Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects)

● From [Create a Basic Javascript Object](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object) to [Extend Constructors to Receive Arguments](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments)

● [Objects Exercises](https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/intro)

● [Advanced Objects Exercises](https://www.codecademy.com/courses/introduction-to-javascript/lessons/advanced-objects/exercises/adv-intro)


## PROYECTO TEMA 3 - BINGO GAME! 🎲🎰

Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números no repetidos (excluyendo el 0 siempre).

Un forma amigable de mostrar el cartón en consola podria ser usando [console.table()](https://developer.mozilla.org/es/docs/Web/API/Console/table)

Para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número. Si coincide con alguno de los existentes en el cartón, cambiará por una "X".

El cartón se mostrará al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X" (solamente se puede cantar línea 1 vez).

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Podeis simular un ranking con usuarios que tengais previamente creados en un array con sus puntuaciones aleatorias.

Por último, deberá preguntar si desea volver a jugar.

Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 😁

<strong>
BINGO VERSION MINIMA:
</strong>

Cartón con solo 5 números (no repetidos), sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado
Separarlo todo en funciones, incluidas en una función global llamada bingo(), tal que:
function()=> Generar Numero Random Bombo
function()=> Nuevo turno (Match carton[i] === randomNum)
function() => Preguntar Nuevo Turno


<strong><center>
BINGO VERSION COMPLETA
</strong></center>


● Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "Yes" para proceder.

● Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.

● Antes de empezar el juego, muestra el sistema de puntos al usuario.

● Ranking de usuarios (ordenado por puntos).

Os compartimos un ejemplo, pero podeis hacerlo como mejor os convenga

let bingoCard = [
    
    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    //next line

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false },

    { number: randomNumber, matched: false }
];


![Workflow](../media/bingo-workflow.png)
