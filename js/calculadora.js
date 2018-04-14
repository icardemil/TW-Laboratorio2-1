var valorEnPantalla;
var valor1;
var valor2;
var operador;

/*Función que permite insertar un valor numérico en el input box*/
function insertarNumero(numero) {
  /*Comprueba si el valor que hay en el input box es igual cero o distinto a '.0', 
    si se cumple se reemplaza el 0 por el número ingrasado */
  if(valorEnPantalla==0 && valorEnPantalla !==  '0.'){
    valorEnPantalla = numero;
  }
  /*Si ya hay un número en el input box, se le concatena el ingresado por el usuario*/
  else{
    valorEnPantalla += numero;
  }
  /*Actualiza el input box con el nuevo valor */
  updateInput();
}
function insertarComa() {
  /*Si en el input box hay un 0, se procede a concatenar una coma después del cero, aunque en realdad se
    reemplaza el 0 por un 0.*/
  if(valorEnPantalla==0){
    valorEnPantalla = '0.';
  }
  /*Comprueba si el número al que se le desea agregar la coma, es un número entero, es por eso
    que se pregunta si el módulo de lo que hay en el input box es igual a cero */
  else{
    if(valorEnPantalla%1===0){
      valorEnPantalla += '.';
    }
  }
  /*Actualiza el input box con el nuevo valor */
  updateInput();
}
  /*Deja en cero todos los valores de la calculadora */
function presionarC() {
  valor1=0;
  valor2=0;
  valorEnPantalla=0;
  /*Es necesario dejar el operador en cero, para evitar problemas en caso que el usuario presione
  el botón igual, ejecutando así, la última operación realizada */
  operador = 0;
  updateInput();
}
/*El valor del parámetro signo varía según el botón presionado por el usuario */
function insertarOperacion(signo) {
  /*Si no hay valores distintos de cero en la input box, la calculadora no registrará la 
    operación deseada por el usuario */
  if(valorEnPantalla != 0){
    /*Guarda el contenido del input box*/
    valor1 = parseFloat(valorEnPantalla);
    /*Deja en cero el contenido de la pantalla, para que el usuario ingrese el nuevo valor */
    valorEnPantalla = 0;
    /*Cambia el estado donde 1: suma, 2: resta, 3: multiplicación, 4: división*/
    operador = signo;
    /*Actualiza el input box con el nuevo valor */
    updateInput();
  }
}
/*Operación que descencadena al presionar el botón igual */
function obtenerResultado(){
  /*Guarda el contenido del input box*/
  valor2 = parseFloat(valorEnPantalla);
  switch(operador){
    case 1:
      valor1 += valor2;
      break;
    case 2:
      valor1 -= valor2;
      break;
    case 3:
      valor1 *= valor2;
      break;
    case 4:
      valor1 /= valor2;
      break;
  }
  /*Reinicia el operador*/
  operador = 0;
  valorEnPantalla = parseFloat(valor1);
  /*Actualiza el input box con el nuevo valor */  
  updateInput();
  /*Deja en cero por si el usuario desea continuar realizando operaciines*/
  valor2=0;
}
function updateInput() {
  /*Actualiza el input box con el nuevo valor */  
  document.getElementById("resultado").value = valorEnPantalla;
}

