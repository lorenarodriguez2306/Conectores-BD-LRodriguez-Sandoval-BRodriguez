# Manual: Cómo conectar un formulario web a una base de datos y como agregar y extraer información.

## Video: https://youtu.be/ei5sPrbLhY8?si=wyw1AEPYzRO_ZrRl

### ¿Qué es un conector de base de datos?

Es un **puente** que permite que el lenguaje de programación (en este caso JavaScript) se comunique con el sistema de base de datos. Funciona como un traductor que toma las instrucciones de tu código para que la base de datos pueda guardar o entregarte la información que necesitas.

### Paso 1: Herramientas que usamos

Para este proyecto usamos herramientas indicadas: **Node.js**, Funciona como el motor del servidor que permite ejecutar JavaScript fuera del navegador, **Express:** Es el servidor web que recibe las solicitudes de los usuarios, escucha sus peticiones y decide qué instrucciones ejecutar y **SQLite**, que es una versión de SQL muy pequeña y fácil de usar porque guarda toda la información en un archivo dentro de la misma carpeta del proyecto.

### Paso 2: Instalación del conector

Debemos tener Node.js ya instalado desde su pagina oficial, para preparar la carpeta de nuestro proyecto primero se abre la terminal de la carpeta y se escribe el comando **npm init -y** para crear el archivo de configuración `package.json`. Después, se instala el conector con el comando **npm install sqlite3** y con el comando **npm install express** se instala Express, al ejecutar estos comandos en nuestra carpeta se crearán los archivos `package.json`, `package-lock.json` y la carpeta `node_modules` (donde se almacenan las librerías descargadas)

### Paso 3: Crear la tabla de datos

Dentro del código **index.js**, el conector ejecuta una instrucción para crear la tabla si aún no existe:
**CREATE TABLE IF NOT EXISTS productos (o nombre de tu tabla) ( id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(120) NOT NULL, precio REAL NOT NULL );**
Es muy importante definir el ID como **INTEGER PRIMARY KEY AUTO_INCREMENT** para que la base de datos le asigne un número único a cada artículo automáticamente, hay que asegurar que esté escrito **INTEGER** y no **INT** para que **AUTO_INCREMENT** funcione.

### Paso 4: Cómo agregar información

Cuando un usuario llena el formulario en la web y presiona el botón **Guardar**, el sitio envía los datos ingresados hacia el servidor Express, en index.js el conector utiliza la instrucción **INSERT INTO productos** para tomar esos datos y guardarlos permanentemente en el archivo de la base de datos.

### Paso 5: Cómo extraer información

Para mostrar los productos que ya están guardados, se presiona un boton en el cual el conector dentro del código index.js realiza una consulta a la base de datos usando la orden **SELECT \* FROM productos**. Esta instrucción selecciona todos los registros de la tabla para que la pagina web muestre la lista de registros en la pantalla.

### Paso 6: Ejecutar el proyecto

Para que todo funcione, primero se debe encender el proyecto escribiendo en la terminal de la carpeta del proyecto el comando **node index.js** el cual index.js es  donde se unen el servidor (Express), el conector (SQLite) y la lógica de la página. Una vez que el servidor está activo, para ingresar a la página web no abriremos el html, si no que en el navegador buscaremos **http://localhost:3000** para ver la web en funcionamiento, 3000 viene a ser el puerto que asignamos en el que se aloja nuestro trabajo.

### Datos importantes

Si este proyecto se prueba en un nuevo dispositivo, se tendrá que ejecutar los comandos de instalación del paso 2 para que el proyecto funcione

Para utilizar este trabajo primero se debe ejecutar el comando **node index.js** en la consola de la carpeta donde se haya guardado este proyecto, si no se hace esto la página tirará error, **NO** se debe cerrar la consola con el comando ejecutandose si aún sigues en la página o dejará de funcionar y se tendrá que volver a ejecutar el código.

Al poner en funcionamiento a **index.js** este contiene los comandos para crear la base de datos y la tabla donde irán los registros, a pesar de cerrar la página los datos seguirán guardados en la base de datos creada y se podrán seguir recuperando. 
