$(document).ready(function() {
  $('#add').click(function(){
    let p = document.createElement("P");  
    p.innerHTML = $("#entrada")[0].value;
    $("#lista")[0].append(p);
  });
});