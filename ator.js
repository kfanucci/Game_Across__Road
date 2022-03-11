
//Codigo ator
let yAtor = 366;
let xAtor = 150;
let colisao = false;
let pontos = 0;

//Funções
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3; 
  }
   if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
     yAtor +=3;
    }
  }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro - 1, altCarro - 1, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somColisao.play();
      if (pontosMaiorZero()){
        pontos -= 1
      }
    }
  }
}

function colidiu(){
  yAtor = 366;

}
//placar
function incluiPontos (){
  fill(color(150,255,0));
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 5, 26);
}

function maisPonto(){
  if(yAtor < 12){
    pontos += 1;
    colidiu();
    somPontos.play();
  }
}
  
function pontosMaiorZero (){
  return pontos > 0
}

function podeMover(){
  return yAtor < 366
}
