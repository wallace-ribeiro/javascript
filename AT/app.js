var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];

let carta1 = null;
let carta2 = null;
let novaRodada = false;
let carta1i = null;
let carta1j = null;
let carta2i = null;
let carta2j =null;
let bloqueio = false;

$(document).ready(function() {
  var cartas = []
  var cartasEscolhidas = []
  //criando as cartas
  for(let i = 0; i < 4; i++) {
      cartas.push([])
      cartasEscolhidas.push([])
      for(let j = 0; j < 4; j++) {
        cartas[i].push('')
        cartasEscolhidas[i].push(false)
      }
  }
  
  // escolher as cartas (embaralhar)
  for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
        // em imagens da posição 0 à 7 eu tenho imagens válidas
        let escolha = Math.floor(Math.random() * 7)
        cartas[i][j] = imagens[escolha]
      }
  }
  console.log(cartas)
// criando as representações das cartas
  for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
        let div = document.createElement("div");
        div.setAttribute("id", "carta_"+i+"_"+j)
        $("#main")[0].append(div);
      }
  }




//estilizando as
  for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
          $("#carta_"+i+"_"+j).css("background-image", "url("+imagens[8]+")");
          $("#carta_"+i+"_"+j).css( "height", "84px")
          $("#carta_"+i+"_"+j).css( "width", "84px")
          $("#carta_"+i+"_"+j).css( "background-size", "84px 84px")
          $("#carta_"+i+"_"+j).css( "border", "2px solid black")

          $("#carta_"+i+"_"+j).css( "display", "flex")
          $("#carta_"+i+"_"+j).css( "position", "absolute")
          $("#carta_"+i+"_"+j).css( "top", (i*90) + "px")
          $("#carta_"+i+"_"+j).css( "left", (j*90) + "px")
      }
  }

  



  //ações
  for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
          $("#carta_"+i+"_"+j).click(function() {

              if(bloqueio == false && cartasEscolhidas[i][j] == false && !(novaRodada == true && carta1i == i && carta1j == j)) {
                let imagem = "url("+cartas[i][j]+")"

                if(novaRodada == true) {
                  carta2 = cartas[i][j];
                  carta2i = i;
                  carta2j = j;
                  novaRodada = false;
                  console.log(`Carta 2 escolhida: ${carta2i} ${carta2j}`)
                  bloqueio = true;
                  if(carta1 == carta2) {
                    console.log('Cartas iguais');
                    cartasEscolhidas[carta1i][carta1j] = true
                    cartasEscolhidas[carta2i][carta2j] = true
                    bloqueio = false;
                  } else {

                    setTimeout(() => {
                     // escondendo novamente a carta 1
                      imagem = "url(img/cross.png)"
                      $("#carta_"+carta1i+"_"+carta1j).fadeOut(1000, undefined, () => {
                        $("#carta_"+carta1i+"_"+carta1j).css("background-image", imagem)
                        bloqueio = false;
                      })
                      $("#carta_"+carta1i+"_"+carta1j).fadeIn(1000)

                      //escondendo novamente a carta 2
                      $("#carta_"+carta2i+"_"+carta2j).fadeOut(1000, undefined, () => {
                        $("#carta_"+carta2i+"_"+carta2j).css("background-image", imagem)
                      })
                      $("#carta_"+carta2i+"_"+carta2j).fadeIn(1000)
                    }, 6000)
                }

                } else {
                  carta1 = cartas[i][j];
                  carta1i = i;
                  carta1j = j;
                  novaRodada = true;
                  console.log(`Carta 1 escolhida: ${carta1i} ${carta1j}`)
                }

                // exibindo a carta
                $("#carta_"+i+"_"+j).fadeOut(1000, undefined, () => {
                  $("#carta_"+i+"_"+j).css("background-image", imagem)
                })
                $("#carta_"+i+"_"+j).fadeIn(1000)
              }

              
          })
      }
  }

  /*$('#carta').css("background-image", imagem);
  $('#carta').css( "height", "84px")
  $('#carta').css( "width", "84px")
  $('#carta').css( "background-size", "84px 84px")
  $('#carta').css( "border", "2px solid black")
  $('#carta').click(function(){
      imagem = "url(img/android.png)"

      // exibindo a carta
      $('#carta').fadeOut(1000, undefined, () => {
        $('#carta').css("background-image", imagem)
      })
      $('#carta').fadeIn(1000)

      setTimeout(() => {
          // escondendo novamente a carta
          imagem = "url(img/cross.png)"
          $('#carta').fadeOut(1000, undefined, () => {
             $('#carta').css("background-image", imagem)
          })
          $('#carta').fadeIn(1000)
      }, 6000)

      
      
      
    
  })*/
});
