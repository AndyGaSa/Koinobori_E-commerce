# Crear una nueva App con React 
1. Instalar de forma global react
~~~bash
$npm i -g create-react-app
~~~
2. Nos vamos el direcotrio de trabajo donde queremos iniciar el directorio de la app
~~~bash
$npx create-react-app <app_name>
~~~
3. Una vez iniciado el proyecto entramos en el drectorio
~~~bash
$cd <dir_name>
$npm i eslint
$npx eslint --init
~~~
4. Añadimos en el pakage.json
~~~bash
    "test": "react-scripts test --watchAll --collect-coverage",
~~~
5. Para finalizar podemos iniciar la app
~~~bash
npm start
~~~

Creamos un componente 
- author quiz
    - header
    - quiz 
        - books
            - book

los Eventos en React se llaman elementos sinteticos

Challenge de 26/7
Hacer con react una pagina que pueda pintar varios componentes segun el estado para simular asi que se esta cambiando de pagina

27/7 react routes

# React routes
En el directorio donde guardamos las paginas añadimos un archivo 'Routes.jsx' en el vamos a importar todas las paginas que queremos enrutar y instalamos el paquete 'react-router'.
~~~javascript
//Router.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '/app/App';
import Dashboard from '../dashboard/dashboard';
import Header from '../../modules/Header';
import Details from '../details/Details';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Header} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/list' component={List}/>
    </Route>
)
~~~



28/7 redux

Object maping
