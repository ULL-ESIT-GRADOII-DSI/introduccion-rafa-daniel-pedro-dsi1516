# Práctica 2 de DSI
## Introducción
En esta práctica hemos tenido que desarrollar una aplicación web que nos permite convertir de grados Fahrenheit a grados Celsius y viceversa.

### Diferencias con la versión en la rama `master`

* En la rama `html5pattern` el tag `<input>` se metió dentro de una form.

        <form id="formulario" onsubmit="calculate();">

  mientras que en la rama `master` estaba fuera 

* Además el `<input>` está controlado con el atributo `pattern` HTML5 de `<input>`:

        <input id="original"
               placeholder="32F"
               size="50"
               title = "Escribe un número seguido de una de las letras 'F' o 'C'"
               pattern="([-+]?\d+(?:\.\d*)?)\s*([fFcC])"
        />

* El fichero `pattern.html` tiene ejemplos de como usar el atributo `pattern`

          <form>
            <fieldset>
              <p><label>Caracteres alfanuméricos:</label><input type="text" pattern="[a-zA-Z0-9]+" /></p>
              <p><label>Letras:</label><input type="text" pattern="[a-zA-Z]+" /></p>
              <p><label>Números:</label><input type="text" pattern="[0-9]+" /></p>
              <p><label>Fecha (dd/mm/YYYYYY):</label><input type="text" pattern="(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d" /></p>
              <p><label>Email:</label><input type="text" pattern="[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+" /></p>
              <input id="final" type="submit" value="Aceptar" />
            </fieldset>
          </form>

* En esta rama en `temperature.js` se usa `alert` para enviar los mensajes en vez de insertarlos en la página con el método `innerHTML`.

* Véase también [HTML `<input>` pattern Attribute in W3Schools](http://www.w3schools.com/tags/att_input_pattern.asp)

## División de trabajo
* [Rafael Herrero](https://github.com/Rafaherrero): HTML
* [Daniel Ramos](https://github.com/DanielRamosAcosta): CSS
* [Pedro Ramos](https://github.com/alu0100505078): Javascript

## Despliegue
Nuestra aplicación se puede visualizar desde la github page de este repositorio, la cual se puede acceder a través de [este](http://ull-esit-gradoii-dsi.github.io/introduccion-rafa-daniel-pedro-dsi1516/) enlace.

## Página de la asignatura
Enlace a la [asignatura de DSI del campus de la ULL](https://campusvirtual.ull.es/1516/course/view.php?id=144)
