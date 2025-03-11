function criarBotao(){
    const botao=document.createElement("button");
    botao.textContent="Novo Botão";
    botao.classList.add("botao-estilizado");
    document.body.appendChild(botao);
}