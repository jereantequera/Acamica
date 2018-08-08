function enviarValor () {
  let emviarValor = event.target.value;
  let valorActual = document.querySelector("#inputField").value;
  document.querySelector("inputField2") = emviarValor + valorActual;
}

function operaiones() {
  let operar = document.querySelector("#inputField");
  let calc = eval(operar);
}
