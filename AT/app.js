var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];


$(document).ready(function() {
  var cartas = []
  //criando as cartas
  for(let i = 0; i < 3; i++) {
      cartas.push([])
      for(let j = 0; j < 2; j++) {
        cartas[i].push('')
      }
  }
  
  // escolher as cartas (embaralhar)
  for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 2; j++) {
        // em imagens da posição 0 à 7 eu tenho imagens válidas
        let escolha = Math.floor(Math.random() * 7)
        cartas[i][j] = imagens[escolha]
      }
  }
  console.log(cartas)
// criando as representações das cartas
  for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 2; j++) {
        let div = document.createElement("div");
        div.setAttribute("id", "carta_"+i+"_"+j)
        $("#main")[0].append(div);
      }
  }

//estilizando as
  for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 2; j++) {
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
  for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 2; j++) {
          $("#carta_"+i+"_"+j).click(function() {
              let imagem = "url("+cartas[i][j]+")"

              // exibindo a carta
              $("#carta_"+i+"_"+j).fadeOut(1000, undefined, () => {
                $("#carta_"+i+"_"+j).css("background-image", imagem)
              })
              $("#carta_"+i+"_"+j).fadeIn(1000)

              setTimeout(() => {
                  // escondendo novamente a carta
                  imagem = "url(img/cross.png)"
                  $("#carta_"+i+"_"+j).fadeOut(1000, undefined, () => {
                    $("#carta_"+i+"_"+j).css("background-image", imagem)
                  })
                  $("#carta_"+i+"_"+j).fadeIn(1000)
              }, 6000)
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
