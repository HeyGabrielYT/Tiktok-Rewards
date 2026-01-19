function abrirSaque() {
  document.getElementById("modalSaque").style.display = "flex";
}

function fechar() {
  document.getElementById("modalSaque").style.display = "none";
  document.getElementById("modalAviso").style.display = "none";
}

function avancar() {
  document.getElementById("modalSaque").style.display = "none";
  document.getElementById("modalAviso").style.display = "flex";
}