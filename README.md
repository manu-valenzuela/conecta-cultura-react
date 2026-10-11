# **React + Vite**

Desarrollo de la Experiencia 2.

# APUNTES GUÍAS

## Apuntes Guía 10

Props: Los props son los parámetros de una función. Ese parámetro puede ser una función (revisar el concepto de funciones de orden superior).

En TarjetaActividad, onInscribir ingresa como parámetro, siendo una función.
Luego, al usar la función con ingresos de parámetros, se puede usar la función para ejecutar las entradas de un arreglo, donde cada índice llena los datos que requiere la función. Esto es útil para repeticiones (por ejemplo, artículos de diario o productos).

Map: véase en Cartelera.jsx. map transforma el arreglo en otra cosa, y lo hace mediante la función que está dentro de su propio prop.

Función anónima: véase en Cartelera.jsx. función sin nombre, usada mucho dentro de métodos como map. comienza con un objeto, declarado al principio, y mediante una flecha (=>) se define qué es lo que se quiere que ocurra.

useState: véase en App.jsx. Ordena una nueva renderización de página cuando hay un cambio de categoría.

Operador Ternario: véase en App.jsx. ? y :, definen una pregunta y su reacción a un retorno TRUE o FALSE.

onChange: véase en App.jsx. Dispara una acción al ocurrir un cambio.

some: véase App.jsx. Comprueba si un elemento de un arreglo cumple con una condición y reotrna un boolean.

useEffect: véase App.jsx. Al detectar un cambio, sobreescribe información.

[]: Cada aparición de estos corchetes denota el uso de un arreglo.

...: véase App.jsx. dentro de un arreglo, ... agrega una entrada a un arreglo.

filter: véase App.jsx. función que devuelve un booleano dependiendo si el criterio de la función anónima cumple con un criterio o no.

##Guía 11

Single Page Application: La navegación es posible a través de la primera página.

useParams: véase DetalleActividad.

##Guía 12

**Revisar el procedmiento para subir la web a AWS en un EC2 y anotar los apuntes relevantes aquí.**

##Guía 13

Al armar un test, es importante que se testee el funcionamento de la función. Por ejemplo, si se testea una función CRUD, lo que se busca testear es que obtenga los datos a guardar adecuadamente y no necesariamente que los guarde, porqu eso ya es ámbito de la base de datos.

##Guía 14

Se recomienda tomar la lógica de los componentes y convertirlo en funciones que se ubican dentro de Utils. Eso facilita
el testing.

utils/presistencia.js: Guarda el arreglo de datos como una función. También puede leer datos. La idea es que contenga todas las funciones que son propias de la persistencia del negocio.
    -export: Es el encapsulamiento de la función. permite que sea leíday utilizada en el resto del código.

mock: elemento que se hace pasar por la función original.

persistencia.spec.jsx: Testea guardarInscripción, y lo importa. En la línea 6, se crea un espía (mock), suplantando la función Set Item que vive dentro de un prototipo que se llama storage. En la línea 7, crea una actividad que es el arreglo de datos a guardar. Al ser un test, no llama al localStorage. En la línea 11, se espera que espía llame a una función que contiene "inscripciones", y que guarde un arreglo que consiste en "datos" (línea 7). El espía también puede simular la respuesta, que en este caso sería decir que los "datos" se "guardaron" y, con eso, se prueba el funcionamiento de guardar inscripción sin que guarde nada.

actividades.js: mapea el arrelgo de actividades para dejar solo un arreglo de los nombres de las actividades. async define la función como asíncrona y await es una llamada asíncrona. Para testear es necesario maquetear una respuesta, de modo tal que no sea necesario testear usando el backend.

actividades.spec.jsx: una forma de testear de forma asíncrona. Se crea un servicio que contiene una lista. la maqueta es una lista, y se debe retornar la lista usando la función testeada. Como es asíncrona, se permite que espere por los datos y, en las expectativas, se espera que el servicio que sea llamado y que obtenga un objeto con el nombre usado en la maqueta de datos.