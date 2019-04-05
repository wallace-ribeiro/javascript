(function() {
  $(document).ready(function() {
    let msgs = []
    
    
    updateMsgs = function (msg) {
      let p = document.createElement("P");  
      p.innerHTML = `${msg.mensagem.name}: ${msg.mensagem.msg}`;
      $("#mensagens")[0].append(p);
    }
    
    $("#emitMsg").click(function() {
        console.log('emiting');
        $.post('http://104.248.235.252:3005/api/mensagens/',{msg: {msg: $("#msg")[0].value, name: $("#name")[0].value}}, function(response) {
             console.log('Response: ', response);
	     
         }, 'json')
    });
    
    $.get('http://104.248.235.252:3005/api/mensagens/'+1000, function(response) {
             console.log('last 1000: ', response);
	     response.forEach((msg) => {
	       updateMsgs(msg);
	       msgs.push(msg);
	    })
    }, 'json')
    setTimeout(function() {
       setInterval(function() {
          $.get('http://104.248.235.252:3005/api/mensagens/since/'+(msgs.length > 0 ? msgs[msgs.length -1].id : 0), function(response) {
               console.log('new msgs: ', response);
	       let newMsgs = response;
                newMsgs.forEach((msg) => { 
	        msgs.push(msg);
	        updateMsgs(msg);
	       
	      });
         }, 'json')
       }, 1000)
    }, 3000);
   
  });
})();
