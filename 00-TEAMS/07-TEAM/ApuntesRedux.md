# Apuntes de Redux
## Enlaces utiles
[Referencia JSX](https://es.reactjs.org/docs/jsx-in-depth.html)

[API-React](https://es.reactjs.org/docs/react-api.html)

[API-React Router](https://reactrouter.com/web/guides/quick-start)

[API-Redux](https://react-redux.js.org/api/provider)
## introduccion
Redux nos permite poder tener los datos/stados en un Objeto global llamado Store.

Siguiendo el metodo flux, que nos indica que el flujo de datos debe de ir solo en una direccion.

Pero React tiene un flujo donde los datos van de padres a hijos y los estados de hijos a padres.

Para solucionar este problema entra redux que organiza todo el flujo de datos y estados para que fluyan a traves de objetos que acaban almacenados o modificando el store.

Luego los componentes de react se conectan a esta Store y su flujo natural no se altera pero se ve interceptado por Redux reorganizando ese flujo de datos

## Funcionamiento del Store
Para comprender mejor el flujo debemos de tener claro como se define store dentro de nuestra aplicacion de React.

La store se define a traves de la funcion createStore().
Dicha funcion recibe como argumentos el rootreducer para poder ser llamado al recibir una accion(el objeto resultante) y en nuestro caso de uso, como usamos llamadas asincronas añadimos como segundo argumento la funcion applyMiddleware() con thunk como argumento, esto va a provocar que cuando todo el flujo de entrada de la store pase por thunk y este si encuentra en el flujo una promesa la intercepta asta que se cumpla, una vez resuelta la promesa devuelve el valor de forma sincrona al store.

Esto es porque store al almacenar nuestros datos en forma de objeto, va hacer que guarde la promesa y una vez esta se cumpla no se va a poder consumir, asi que obtamos por que Thunk espere a que se cumpla, consuma esos datos y luego los entrege a la store, salvando así el problema que nos plantea los datos asyncronos.

## Flujo de Redux
Cuando React ejecuta un componente toma la informacion del Store a traves de la funcion connect(), así que ahora ya no hace falta que los datos vengan directamente de un padre, Redux los envia desde el Store en forma de props.

flujo:
1. El componente recibe datos del Store a traves de connect() en forma de props

2. El componente despacha un evento hacia connect(), la estore ya tiene las accions y los reducers configurados previamente. Asi que lo que hace es buscar a que accion equivale el evento que ha emitido el componente y despacha esa accion, tambien podemos despachar una accion de forma directa con dispatch.

3. La accion se procesa y nos de como resultado un objeto con la sigueinte forma
~~~javascript
{
  type: "Nombre del Evento Hard_codeado",
  datos // esto puede ser cualquier tipo de dato
}
~~~

4. Cuando se completa la funcion que hemos invocado en actions Redux invoca de forma automagica el reducer que solo es un switch donde se ejecuta el caso que tiene el mismo valor que nuestro 'type' y recupera los datos del objeto que hemos obtenido de la funcion de action. Y escribe esos datos en la Store

5. Cuando se completa este circulo Redux le pide a React que haga una reconciliacion entre el Virtual-DOM y el DOM del navegador, y ahora los datos nuevos se reciben por el componente en forma de Props