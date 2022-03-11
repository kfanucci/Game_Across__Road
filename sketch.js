
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentoAtor();
  resetarCarro (xCarros[0],xCarros[1],xCarros[2]);
  verColisao();
  incluiPontos();
  maisPonto();
}


