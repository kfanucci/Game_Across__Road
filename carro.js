//Codigos do Carro

let yCarros = [40, 96, 150, 210, 270, 318]; 
let vCarros = [2, 3.3, 2.5, 5, 3.2, 2]; //velocidade carro
let xCarros = [500, 500, 500, 500, 500, 500]
let compCarro = 50; //comprimento carro
let altCarro = 40; // altura carro

function mostraCarro (){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
  }
}

function movimentoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= vCarros[i];
  }
}

function resetarCarro (x){
  for (let i = 0; i < imagemCarros.length; i++){
  if(fimTela(xCarros[i])){
    xCarros[i] = 500;
   }
 }
}

function fimTela (xCarros){
  return xCarros < -30;
}