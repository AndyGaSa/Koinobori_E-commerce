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

28/7 redux

Object maping
