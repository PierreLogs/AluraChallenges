//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let num = parseInt(prompt("Ingresa un numero"));
/*if (num > 0) {
  alert("El numero es positivo");
} else if (num < 0) {
  alert("El numero es negativo");
} else {
  alert("El numero es cero");
}*/

switch (num) {
  case num > 0:
    alert("El numero es positivo");
    break;
  case num < 0:
    alert("El numero es negativo");
    break;
  default:
    alert("El numero es cero");
}
