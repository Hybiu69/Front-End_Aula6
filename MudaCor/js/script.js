function mudarCorFundo() {
    if (document.body.classList.contains("azul")) {
     document.body.classList.replace("azul", "vermelho");
    } else {
       document.body.classList.replace("vermelho", "azul");
      }
  }