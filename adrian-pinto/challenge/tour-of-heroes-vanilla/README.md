# Tour of heroes vanilla JS
Este challenge nos enseña a modulizar un proyecto simple con principios solid.

## Estructura de directorios
El proyecto esta fragmentado por cada uno de los casos de uso del mmismo.

### Dashboard
Pagina princial del proyecto donde podemos ver los top heroes.
1. Dr Nice
2. Narco
3. Bombasto
4. Celeritas
Desde esta pagina podemos ir a los detalles de los heroes haciendo click en sus nombres o bien a la lista completa 

### Heroes 
Muestra la lista completa de heroes desde aqui podemos volver al dashboard o hacer click en algun heroes de la lista

### Details 
Muestra la ficha del heroe con toda su informacion
aqui mantenemos los botones de dashboard y de heroes
pero añadimos el boton de volver para regresar al la pagina de la que venimos

Back button
~~~html
 <button onclick="goBack()">Go Back</button>

<script>
function goBack() {
  window.history.back();
}
</script> 
~~~

## Estructura del proyecto 

- Tenemos un archivo heroes.const que nos hara a la vez de base de datos
- hero.class este archivo actuara como constructor para cada uno de nuestros heroes
- implementaremos cada pagina como un componente reusable 


## El uso de web component
Web component gracias al shadow DOM nos permite poder implementar datos en trozos de html que luego podemos reusar aplicando custom elements dentro de nuestra pagina.

### Configuracion basica
Para crear nuestro web component debemos de extender primero el HTMLElement
en un objeto constructor donde vamos a prototipar los datos.

En el siguiente ejemplo vamos a crear una clase Tooltip donde vamos a extender HTMLElement.

~~~javascript
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}
~~~

Para poder usar los metodos de objeto padre usaremos las siguietes funciones
 - super(): Para tenerlos disponibles en el constructor del nuevo objeto.
 - attachShadow(): Al añadir nuestros componentes al shadow DOM nos permite tenerlos separados de nuestro HTML.


Ahora podemos añadir nuestro html con sus stylos dentro de nuestro componente
~~~javascript
this.shadowRoot.innerHTML = `
    <style>
        #tooltip-container {
            font-size: 24px;
        }

        .tooltip{
            padding: 1rem;
            border-radius: 10px;
            background-color: black;
            color: white;
        }
    </style>
    <slot></slot>
    <span id="tooltip-container">👉</span>
`;
~~~
 > Nota: el tag 'slot' nos permite traer elementos del DOM hacia el interior de nuestro componente.

Para acabar la configuracion de nuestro componente deberemos de definirlo dentro de customElements con la siguiente funcion.
~~~javascript
customElement.define('tooltip-tag', Tooltip);
~~~
Ahora nuestro componente esta disponible como una tag mas dentro de nuestro HTML

### Añadir funcionalidad al componente


# notas:
## Consultas:
 - MVC repasar conecptos de los controladores.
## test:
En los test vamos a dividir el test en tres bloques
~~~javascript
test('Check key is exist', () => {
  // arrange - Los datos necesarios para el test
  let uriParams = '?id=01&heroName=Batman';
  // act - operamos los datos y almacenamos los resultados de las expresiones
  let params = new URLSearchParams(uriParams)
  // assert - evaluamos los datos con los test
  expect( params.has('id') ).toBe(true)
})
~~~
## funciones utiles
[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
1. Parsear un parametro de la url 
En el navegador podemos localizar los parametros que hay en una URI en document.location.search.substring(1), Podemos crear un objeto con ello gracias a URLSearchParams() para mas tarde parsear el resultado
~~~javascript
let params = new URLSearchParams(document.location.search.substring(1))
~~~

2. Una vez creado el objeto URLSearchParam() podemos consultar los parametros con .get('PARAM_TO_FIND') esto nos retornara el valor del parametro que le indicamos
~~~javascript
// URI localhost/?id=01&name='pepe'
let idValue = params.get('id') // '01'
let nameValue = params.get('name') // 'pepe'
~~~
 - Funciones utiles de 'URLSearchParams'
   - forEach: se opera con un callback
  ~~~javascript
  params.forEach( (value, key ) => console.log( value, key ))
  ~~~
   - .entries: se opera con un array
  ~~~javascript
  for( let param of params.entries()){
    console.log( `Clave: ${param[0]} Valor: ${param[1]}` )
  }
  ~~~
  3. .has('KEY_TO_CHECK')
  ~~~javascript
  let result = params.has('id') // result: true || false
  ~~~
  4. .get() Devuelve el valor que apunta la key
  ~~~javascript
    let result = params.get('id') // result: '01'
  ~~~
  5. .getAll(KEY_TO_FIND) Devulve todo los valores asociados a la key
  ~~~javascript
  let result = params.getAll('id') // result: [ '01' ]
  ~~~ 

[metodo statico](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)
 - Cuando definimos una nueva clase podemos añadir metodos staticos que seran unicamente accesible en el momento que estamos generando una nueva instancia de la clase y luego quedaran inaccesibles
 - Nos debemos de asegurar de que el metodo statico no tiene dependencia de la clase
