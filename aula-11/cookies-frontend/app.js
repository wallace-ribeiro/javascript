
(function () {
$(document).ready(function() {
  
  $('#add').click(function(){
    addCount();
  });
  
  
  function getCounter() {
    $.get( "http://104.248.235.252:3007/api/counter", function( data ) {
      console.log('cookie: ',document.cookie)
      console.log('datA: ',data);
      $("#counter").text('Numero de cliques: '+data.counter)
    }, 'json');
  }
  
  function addCount() {
    $.post( "http://104.248.235.252:3007/api/counter", function( data ) {
      console.log('cookie: ',document.cookie)
      console.log('datA: ',data)
      $("#counter").text('Numero de cliques: '+data.counter)
    }, 'json');
  }
  
  getCounter();

});
})();
