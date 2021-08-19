# Indice
 - Que es TDD
 - 
 - Que es Jest
 - Test Unitarios
 - Configurar entorno de trabajo
 - Primer test
Por leer
 - Definicion de contextos
 - Otros tipos de test
 - - BDD ( Test dirigido por comportamiento )
 - test coverange https://www.valentinog.com/blog/jest/
 - Watch mode
 - https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/
 - https://tecnops.es/testing-en-javascript-con-jest-parte-1-de-2/
 - https://yeisondaza.com/configurar-jest

## Que es TDD
Test Driven Development, es en pocas palabras el desarrollo donde antes de crear las funcionalidades del programa estas se definen y inmediatamente despues de escriben los test que las validan.

## Ciclo TDD
El TDD se estructura en un ciclo que se compone por las siguientes tres etapas:

 - FAIL: El test se plantea y falla
 - PASS: El codigo se escribe y pasa el test
 - Refactor: El codigo de cambia por el motivo que sea

## Los test Unitarios
Estos test se componen por pequeñas unidades de nuestro codigo
puedes ser una funcionalidad completa o una funcion en particular
pero aunque probemos una funcionalidad completa siempre debemos de dividir los test en los fragmentos mas pequeños posibles

## Test con console.assert
El propio navegador nos permite hacer una suerte de test donde si el valor que entrega assert es 'false' nos devolvera el mensage de error definido

~~~javascript
console.assert( eval, Error string )

//Ejemplo de implementacion
const sum = ( a, b ) => {
    return a + b;
}

const checks = [
    { a: 0, b: 0, result: 0},
    { a: 3, b: 7, result: 10},
    { a: 2, b: 18, result: 20}
]

checks.forEach( check => {
    const { a, b, result } = check

    console.assert(
        suma( a, b ) === result,
        `La suma de ${ a } y ${ b } deberia de dar ${ result }`
    )
})
~~~

El anterior comando tiene serias limitaciones y no se recomienda usar mas alla de pequeñas comprobaciones puntuales

## ¿Que es Jest?
Es una libreria para poder pobar el codigo que estamos programado.
Esto nos ayuda a poder evitar ciertos fallos a la hora de desarollar y 
minimizar la deuda tecnica de nuestro codigo.

## Las pruebas unitarias
Esta clase de pruebas nos permiten comprobar pequeños fragmentos de codigo,
comprobando así si son fiando.

Los test se ejecutan con entradas explicitas así que si no estan correctamente planteados pueden dar lugar a fallos o casos en los que el test no es totalmente fiable.

Sus principales caracteristicas son:
 - Automatizable
 - Total Cobertura
 - Reutilizables
 - Independencia entre test
 - Creacion rapida

## Configurar el entorno de trabajo
Iniciamos un proyecto de node con:
~~~bash
$ npm init -y ( El flag 'y' acepta todos los parametros )
~~~ 

Añadimos el paquete de Jest en las dependencias del proyecto
~~~bash
$ npm i -D jest ( El flag 'D' configura la dependencia como Dev )
~~~

Para finalizar configuramos Babel para que Jest pueda parsear ES6
~~~bash
$ npm install --save-dev @babel/preset-env
~~~
una vez añadida la dependencia de Babel añadimos un archivo de configuracion en la raiz del directorio de trabajo llamado '.babelrc'
~~~JSON
{
    "presets": [ "@babel/preset-env" ]
}
~~~
En ese momento deberemos de añadir en el package.json el parametro jest con la llave testEnvironment
~~~JSON
{
    "jest": { "testEnvironment": "node" }
}
~~~

## Primer test
En el directorio de trabajo creamos otro directorio donde almacenaremos los test.
Y en este directorio crearemos los archivos de test de la siguiente forma:
< Nombre del archivo js >.test.js

Una vez redactado el test, ver el ejemplo de index.test.js creamos una tarea en la seccion de scripts de package.json.
~~~JSON
{
    "scripts": {
        "test": "jest"
    }
}
~~~

Para ejecutar el test solo hemos de introducir el siguiente comando desde el directorio de trabajo.
~~~bash
npm run test
~~~

## Ejemplo de un test
Pongamos por ejemplo que queremos hacer una calculadora con la metodologia TDD

Antes de nada vamos hacer una toma de requisitos, en nuestro caso seran:
 - Classe calculadora
 - Funcion suma
 - Funcion resta
 - Funcion multiplicar
 - Funcion dividir

Ahora definimos el test para comprobar que las funciones estan definidas en la classe y que estas funcionan correctamente

~~~javascript
import { calculadora } from '../index.js';
const calc = calculadora

describe( 'Constructor', () => {

    test( 'Existe suma?', () => {
        expect( calc.sum ? true : false ).toBe( true )
    });
    test( 'Existe resta?', () => {
        expect( calc.sub ? true : false ).toBe( true )
    });
    test( 'Existe producto?', () => {
        expect( calc.pro ? true : false ).toBe( true )
    });
    test( 'Existe division?', () => {
        expect( calc.div ? true : false ).toBe( true )
    });
})

describe( 'Operaciones matematicas', () => {

    it( 'Realizamos la suma', () => {
        expect( calc.sum( 1, 1 ) ).toBe( 2 );
    });

    test( 'Realizamos la resta', () => {
        expect( calc.sub( 15, 20 ) ).toBe( 5 );
    });

    test( 'Realizamos la multiplicacion', () => {
        expect( calc.pro( 2, 3 ) ).toBe( 6 );
    });

    test( 'Realizamos la division', () => {
        expect( calc.div( 100, 5 ) ).toBe( 20 );
    });

})
~~~

## API de Jest
https://jestjs.io/docs/api
La API de jest nos permite poder consultar todos los metodos que tenemos a nuestra disposicion a la hora de escribir nuestros test

## Otros test runers
 - Ava
 - Mocha

## Corner Cases
Son los casos de uso que proboca que aunque nuestra funcion tenga una logica correcta, finalmente nos de un resultado inesperado.