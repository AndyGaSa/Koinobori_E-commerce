# instalacion de Eslint desde npm

## Preparando el entorno de trabajo

 - Iniciamos una instancia de npm en nuestro directorio

 - Instalamos eslink desde npm

 - Configuramos los script del package.json
 
 - Configuramos el eslint con el comando:
~~~~bash
$ npx islint --init
~~~~

 - En clase usaremos la configuracion en el siguiente orden 

   - style
   - none
   - none
   - No
   - Browser, node
   - guide
   - airbnb
   - Javascript || Json
   - yes

## Preparar el VS code para que funcione con Eslint

 - Vamos a la pestaña de extensiones
 - Instalamos el Eslint y desactivamos cualquier pritier que tengamos
 - Entramos en settings
   - editamos las opciones de 'Code Actions On Save'
~~~json
{
    "window.zoomLevel": 1,
    "workbench.statusBar.visible": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true,
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascriptreact",
        "typescriptreact",
        "javascript",
        "typescript",
        "vue"
    ],
    "[javascriptreact]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    },
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    },
    "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    },
    "[vue]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    },
    "workbench.editor.untitled.hint": "hidden"
}
~~~
   -  
