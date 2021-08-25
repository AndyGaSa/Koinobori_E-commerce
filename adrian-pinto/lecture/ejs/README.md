# Apuntes de Side Server Rendering con EJS
 - [SSR](#side-server-rendering)
 - [EJS](#embedded-javascript-templating)
 - [Instalacion de EJS](#instalacion-de-ejs)
 - [Integracion con express](#integracion-con-express)
 - [Uso con express](#uso-en-express)
 - [Sintaxis](#sintaxis)
   - [Basica](#basica)
   - [Eliminando espacios](#eliminar-espacios-en-blanco)
   - [Importar Plantillas](#inclusion-de-otras-plantillas-ejs)
     - [Preprocesador](#preprocesador)
     - [Include()](#inlude)
 - [Testing](#testing)
___
## Side Server Rendering
Esta tecnica nos permite poder servir HTML con datos dinamicos generadas directamente en el servidor.

Para ello el servidor ha de contar con un 'template engine' que se va a encargar de la interpreacion de las plantillas y de generar el HTML nativo para que el servidor pueda enviarlo al cliente.
## Embedded JavaScript templating
Apartir de ahora EJS. Este engine nos permite entre otras cosas poder integrarlo facilmente en express, dotandolo de la capacidad de poder servir HTML dinamico gracias a su sistema de plantillas
## Instalacion de EJS
Se realiza desde NPM
~~~bash
$ npm i ejs
~~~
## Integracion con express
Para ello debemos de indicar el 'view engine' y el PATH a los recursos estaticos visibles al publico
~~~javascript
const expressApp = express();

expressApp.use(
  express.static(
    path.join(__dirname, '/public')
  ),
);

expressApp.use('view engine', 'ejs');
~~~
## Uso en express
Para poder renderizar nuestra plantilla del ejs simplemente debemos de usarlo en la respuesta de un endpoint de la siguiente forma
~~~javascript
const getIndex = (req, res) => {
  const testData = {
    data: req.body,
  };
  res.render('index', testData);
}
~~~
## Sintaxis
La sintaxsis de ejs es escueta y simple ya que solamente pretende dotar de logica a nuestras plantillas mediente marcado
### Basica
 - <% JS code %>
 
 Nos Permite añadir logica a nuestra plantilla mediante JS
 -  <%= VALOR %>

Inserta el valor indicado
 - <%- HTML_VALUE %>

Iserta codigo formateado html este codigo se interpretara como html normal en el navegador
 - <%# COMENTARIO %>

Permite añadir un comentrio

### Eliminar espacios en blanco
Hay veces despues de procesar la pantilla ejs insertara espacios en blanco, si deseamos desacernos de ellos podemos usar
 - <%_ || -%> || _%>
### Inclusion de otras plantillas ejs
Se pueden incluir fragmentos o plantillas completas mediente:
#### Preprocesador
 - <% include PATH %>

! La plantilla insertada tiene acceso a los datos del padre
#### inlude()
 - <% include('PATH', Obj.with-data ) %>

! La plantilla insertada solo tendra acceso a los datos que le hemos pasado

## Testing