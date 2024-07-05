/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".*/

let diaDeSemana = prompt("¿Qué día es hoy?");

diaDeSemana === "Sabado" || diaDeSemana === "Domingo"
  ? alert("¡Disfruta del fin de semana!")
  : alert("¡Buena Semana!");
