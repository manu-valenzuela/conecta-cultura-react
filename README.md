# React + Vite

Desarrollo de la Experiencia 2.

# Apuntes Guía 10

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