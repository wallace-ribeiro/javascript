var id = 30;
var list = [];
$(document).ready(function() {
  $('#add').click(function(){
    console.log('add');
    let p = document.createElement("P");  
    p.innerHTML = $("#entrada")[0].value;
    $("#lista")[0].append(p);
    list.push($("#entrada")[0].value);
  });
  
  $('#salvar').click(function(){
    salvar();
  });
  
  pegarLista();
  
});

function showList() {
  for (i = 0; i < list.length; i++) {
      let p = document.createElement("P");  
      p.innerHTML = list[i];
      $("#lista")[0].append(p);
  }
}

function pegarLista() {
  $.get( "http://104.248.235.252:3000/coisas/"+id, function( data ) {
    list = data;
    showList();
  }, 'json');
}

function salvar() {
  $.post( "http://104.248.235.252:3000/coisas/",{id: id, coisas: list}, function( data ) {
    console.log('data: ',data);
  });
}

