let num1 = "";
let num2 = "";
let calculo = "";
let resultado = "";

function calculadora(valor) {
  if (
    valor.value === "+" ||
    valor.value === "-" ||
    valor.value === "*" ||
    valor.value === "/"
  ) {
    calculo = valor.value;
    document.getElementById("display").value += calculo;
  } else if (valor.value === "C") {
    num1 = "";
    num2 = "";
    calculo = "";
    resultado = "";
    document.getElementById("display").value = "";
  } else if (valor.value === "=") {
    if (num1 !== "" && num2 !== "" && calculo !== "") {
      resultado = eval(num1 + calculo + num2);
      document.getElementById("display").value = resultado;
      num1 = resultado.toString();
      num2 = "";
      calculo = "";
    } else {
      return;
    }
  } else {
    if (calculo === "") {
      num1 += valor.value;
    } else {
      num2 += valor.value;
    }
    document.getElementById("display").value += valor.value;
  }
}
