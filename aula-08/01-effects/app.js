var show = true;
var fade = true;
var slide = true;
$(document).ready(function() {
  $('#show').click(function(){
    show = !show;
    if (show) {
      $('#demo1').show()
    } else {
      $('#demo1').hide()
    }
  });
  $('#fade').click(function(){
    fade = !fade;
    if (fade) {
      $('#demo2').fadeIn()
    } else {
      $('#demo2').fadeOut()
    }
  });
  $('#slide').click(function(){
    slide = !slide;
    if (slide) {
      $('#demo3').slideDown()
    } else {
      $('#demo3').slideUp()
    }
  });
  $('#toggle').click(function(){
    $('#demo4').slideToggle()
  });
});
