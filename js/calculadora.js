var valorEnPantalla;
var valor1;
var valor2;
var operador;

function insertarNumero(numero) {
  if(valorEnPantalla==0 && valorEnPantalla !==  '0.'){
    valorEnPantalla = numero;
  }
  else{
    valorEnPantalla += numero;
  }
  updateInput();
}
function insertarComa() {
  if(valorEnPantalla==0){
    valorEnPantalla = '0.';
  }
  else{
    if(valorEnPantalla%1===0){
      valorEnPantalla += '.';
    }
    else{
      console.log("no mas wey");
    }
  }
  updateInput();
}
function presionarC() {
  valor1=0;
  valor2=0;
  valorEnPantalla=0;
  operador = 0;
  updateInput();
}
function insertarOperacion(signo) {
  if(valorEnPantalla != 0){
    valor1 = parseFloat(valorEnPantalla);
    valorEnPantalla = 0;
    operador = signo;
    updateInput();
  }
}
function obtenerResultado(){
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
  operador = 0;
  valorEnPantalla = parseFloat(valor1);
  updateInput();
  valor2=0;
}
function updateInput() {
  document.getElementById("resultado").value = valorEnPantalla;
}

