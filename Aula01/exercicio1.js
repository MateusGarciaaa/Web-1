let valor1 = '';
let operacao = '';
let valor2 = '';
let expressao = '';


function mudarTexto() {
  let nome = document.getElementById("nome").value;
  document.getElementById("message").innerText = "a";

}

function loadNum(num) {
  expressao = expressao + num;
  document.getElementById("display").value = expressao;
  
}

function loadOperation(op) {
  if(op==='x') op = '*';
  expressao = expressao + op
  document.getElementById("display").value = expressao;
}


function loadResult(){
  resultado = eval(expressao);
  document.getElementById("display").value = resultado;

}

function loadClear(){
  expressao = '';
  document.getElementById("display").value = expressao;
}
