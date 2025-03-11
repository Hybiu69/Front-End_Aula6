function botaoazul() {
  const botaoazul = document.createElement("button");
  botaoazul.classList.add("botaoazul");
  document.body.appendChild(botaoazul);
}
function botaover() {
  const botaover = document.createElement("button");
  botaover.classList.add("botaover");
  document.body.appendChild(botaover);
}

function criarQuadrados() {
  const container = document.createElement("div");
  container.classList.add("quadrado-azul");

  const quadradoVermelho = document.createElement("div");
  quadradoVermelho.classList.add("quadrado-vermelho");

  container.appendChild(quadradoVermelho);
  document.body.appendChild(container);
}

function botaocorRoxo() {
    document.body.classList.toggle("roxo");
  if (document.body.classList.contains("azul")) {
    document.body.classList.replace("azul", "roxo");
  } 
  if(document.body.classList.contains("verde")){
    document.body.classList.replace("verde", "roxo");
  }
}
function botaocorAzul() {
    document.body.classList.toggle("azul");
  if (document.body.classList.contains("roxo")) {
    document.body.classList.replace("roxo", "azul");
  }
}
function botaocorVerde() {
    document.body.classList.toggle("verde");
  if (document.body.classList.contains("azul")) {
    document.body.classList.replace("azul", "verde");
  }
}
