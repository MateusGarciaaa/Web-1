let expressao = '';


function loadNum(num) {
  expressao = expressao + num;
  document.getElementById("display").value = expressao;

}

function loadOperation(op) {
  if (op === 'x') op = '*';
  expressao = expressao + op
  document.getElementById("display").value = expressao;
}


function loadResult() {
  resultado = eval(expressao);
  expressao = resultado
  document.getElementById("display").value = expressao;
}

function loadClear() {
  expressao = '';
  document.getElementById("display").value = expressao;
}

function loadPotencia(){
  
}
