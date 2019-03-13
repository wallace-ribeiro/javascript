$(document).ready(function() {
  var startX = 0;
  var startY = 0;
  var x = 0;
  var y = 0;
  $('#arrastavel').css( {
          position: 'relative',
          border: '1px solid red',
          backgroundColor: 'lightgrey',
          cursor: 'pointer'
  });
  $('#arrastavel').mousedown(function(event){
    event.preventDefault();
    startX = event.pageX - x;
    startY = event.pageY - y;
    $(document).on('mousemove', onMouseMove);
    $(document).on('mouseup', onMouseUp);
  });
  function onMouseMove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;
      $('#arrastavel').css({
          top: y + 'px',
          left: x + 'px'
      });
  }

  function onMouseUp() {
      $(document).off('mousemove', onMouseMove);
      $(document).off('mouseup', onMouseUp);
  }
});