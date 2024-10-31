//zootopia, livre, aventura, infantil 
//coraline e o mundo secreto, 10, fantasia, terror
//meu malvado favorito, 10, comedia, infantil
//o estranho mundo de jack, 12, terror 
//o exorcismo, 16, terror, suspense 
//enola homes 2, 112, suspense
//procurando nemo, livre, aventura, comedia 
//the maze runner, 14, aventura, terror


let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("red");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(0, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 10) {
      return "O estranho mundo de jack";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "o exorcismo";          
        } else{
         return "enola homes 2";
        }
      } else {
        if (gostaDeFantasia) {
          return "coraline e o mundo secreto";
        } else {
          return "procurando nemo";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "zootopia";
    } else {
      return "meu malvado favorito";
    }
  }
}
