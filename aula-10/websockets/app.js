(function() {
  $(document).ready(function() {
    let msgs = []
    
    
    updateMsgs = function (msg) {
      let p = document.createElement("P");  
      p.innerHTML = `${msg.mensagem.name}: ${msg.mensagem.msg}`;
      $("#mensagens")[0].append(p);
    }
    
    var socket = io.connect('http://104.248.235.252:3008');
    console.log('socket: ',socket);
    
    socket.on('msg', function(msg){
      console.log('msg: ', msg);
       msgs.push(msg);
       updateMsgs(msg);
    });
    
    $("#emitMsg").click(function() {
        console.log('emiting');
	socket.emit('msg', {msg: $("#msg")[0].value, name: $("#name")[0].value});
    });
    
    $.get('http://104.248.235.252:3005/api/mensagens/'+1000, function(response) {
             console.log('last 1000: ', response);
	     response.forEach((msg) => {
	       updateMsgs(msg);
	       msgs.push(msg);
	    })
    }, 'json')
   
  });
})();
