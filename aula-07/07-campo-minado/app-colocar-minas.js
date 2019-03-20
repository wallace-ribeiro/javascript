$(document).ready(function() {
  
  var bandeiras = [];
  var bombas = [];
  var id = 555;

  let button = document.createElement("button");  
  button.innerHTML = 'Enviar';
  button.id = "enviar";

  $("#body").append(button);

  $(`#enviar`).css( {
          position: 'absolute',
          top: '20px',
          left: '800px',
          'z-index': 100
    });
  $(`#enviar`).click(function() {
      $.post( "http://104.248.235.252:3000/coisas/",{id: id, coisas: {date: (new Date()).toString(), bombas: bombas, bandeiras: bandeiras}}, function( data ) {
        console.log('data: ',data);
     });
  });

  /*$.get( "http://104.248.235.252:3000/coisas/"+id, function( data ) {
    
  }, 'json');*/

  for(let i = 0; i < 10; i++) {
    let p = document.createElement("span");  
    p.innerHTML = 'Bomba';
    p.id = "bomba_"+i
    $("#body").append(p);
    $(`#bomba_${i}`).css( {
          position: 'absolute',
          border: '1px solid red',
          backgroundColor: 'lightgrey',
          cursor: 'pointer',
          top: '20px',
          left: (20*i)+'px',
          'z-index': 100
    });
    bombas.push({x: 20*i, y: 20, startX: 20*i, startY: 20, gridX: null, gridY: null});
    $(`#bomba_${i}`).mousedown(function(event){
      event.preventDefault();
      bombas[i].startX = event.pageX - bombas[i].x;
      bombas[i].startY = event.pageY - bombas[i].y;
      let functionOMouseMove = onMouseMove(bombas[i], `#bomba_${i}`);
      let functionOnMouseUp = onMouseUp(functionOMouseMove);
      $(document).on('mousemove', functionOMouseMove);
      $(document).on('mouseup', functionOnMouseUp);
    });

  }
  for(let i = 0; i < 5; i++) {
    let p = document.createElement("span");  
    p.innerHTML = 'Bandeira';
    p.id = "bandeira_"+i
    $("#body").append(p);
    $(`#bandeira_${i}`).css( {
          position: 'absolute',
          border: '1px solid green',
          backgroundColor: 'lightgrey',
          cursor: 'pointer',
          top: '60px',
          left: (20*i)+'px',
          'z-index': 100
    });
    bandeiras.push({x: 20*i, y: 60, startX: 20*i, startY: 60, gridX: null, gridY: null});
    $(`#bandeira_${i}`).mousedown(function(event){
      event.preventDefault();
      bandeiras[i].startX = event.pageX - bandeiras[i].x;
      bandeiras[i].startY = event.pageY - bandeiras[i].y;
      let functionOMouseMove = onMouseMove(bandeiras[i], `#bandeira_${i}`);
      let functionOnMouseUp = onMouseUp(functionOMouseMove);
      $(document).on('mousemove', functionOMouseMove);
      $(document).on('mouseup', functionOnMouseUp);
    });

  }
  for(let i =0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
          let p = document.createElement("div");
          p.id = "div_"+i+"_"+j
          $("#body").append(p);
          $(`#div_${i}_${j}`).css( {
              position: 'absolute',
              border: '1px solid blue',
              width: '78px',
              height: '78px',
              cursor: 'pointer',
              top: 100 + (80*j) +'px',
              left: (20 + (80*i))+'px'
          });
      }
  }

  var currentGrid;
  function onMouseMove(item, name) {
      return function onMouseMove(event) {
          item.y = event.pageY - item.startY;
          item.x = event.pageX - item.startX;

          gridX = Math.floor((item.x - 20)/80);
          gridY = Math.floor((item.y - 100)/80);
          if(gridX >= 0 && gridX <= 9 && gridY >= 0 && gridY <= 9) {
            item.gridX = gridX;
            item.gridY = gridY;
            gridTag = `#div_${gridX}_${gridY}`;
            if(currentGrid && gridTag != `"#div_${currentGrid.x}_${currentGrid.y}`) {
               $(`#div_${currentGrid.x}_${currentGrid.y}`).css( {

                  border: '1px solid blue',
               })
            }
            currentGrid = {x: gridX, y: gridY};
            $(`#div_${currentGrid.x}_${currentGrid.y}`).css( {

              border: '1px solid yellow',
            })
          } else {
            if(currentGrid) {
               $(`#div_${currentGrid.x}_${currentGrid.y}`).css( {

                  border: '1px solid blue',
               })
            }
            item.gridX = null;
            item.gridY = null;
            currentGrid= null;
          }

          $(name).css({
              top: item.y + 'px',
              left: item.x + 'px'
          });
      }
  }

  function onMouseUp(functionOMouseMove) {
      let functionOnMouseUp = function onMouseUp() {

          $(document).off('mousemove', functionOMouseMove);
          $(document).off('mouseup', functionOnMouseUp);

          if(currentGrid) {
              $(`#div_${currentGrid.x}_${currentGrid.y}`).css( {
                border: '1px solid blue',
              })
          }
          currentGrid= null;
      }
      return functionOnMouseUp;
  }
});