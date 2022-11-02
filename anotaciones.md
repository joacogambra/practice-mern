### diferencias tarea 2 y tarea 3
#### como realice los cambios
en la App.js desimporte los componentes, y los importe en el nuevo Carousel.jsx que contiene todos los demas componentes antes hechos
deberia poner el Carousel fuera de la carpeta de componentes
dentro del carousel la variable next y prev pasaron a ser funciones
como en Carousel todos los hooks siempre deben estar al principio
dos variables nuevas id y setID
useEffect, con un intervalo de tiempo, un parametro en milisegundos y una funcion que retorna para reiniciar el contador 
esa funcion la aplico en las funciones next y prev (clearInterval)
por ultimo retorno como en el anterior App, el contendio "html" (jsx) para crear la card
y en App solamente con <Carousel> traigo el contenido a renderizar