var myRequest = new XMLHttpRequest();
var id = 30;
function add(){
  let entrada = document.getElementById('entrada');
  let lista = document.getElementById('lista');
  
  let p = document.createElement("P");                       // Create a <p> element
  let t = document.createTextNode(entrada.value);       // Create a text node
  p.appendChild(t);                                          // Append the text to <p>
  lista.appendChild(p);
}

function salvar() {
  
  let l = extrairLista();
  myRequest.open("POST", "http://104.248.235.252:3000/coisas", false);
  myRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  myRequest.onload = function (res) {
  };
  myRequest.send(JSON.stringify({id: id, coisas: l}));
  
}

function extrairLista() {
  let lista = document.getElementById('lista').childNodes;
  l = [];
  for (i = 0; i < lista.length; i++) {
      l.push(lista[i].innerHTML);
  }
  
  return l;
}

function inserirLista(l) {
  let lista = document.getElementById('lista');
  for (i = 0; i < l.length; i++) {
      let p = document.createElement("P");                       // Create a <p> element
      let t = document.createTextNode(l[i]);       // Create a text node
      p.appendChild(t);                                          // Append the text to <p>
      lista.appendChild(p);
  }
}

myRequest.open("GET", "http://104.248.235.252:3000/coisas/"+id, false);
myRequest.onload = function (res) {
  //console.log('res: ',JSON.parse(res.target.response));
  inserirLista(JSON.parse(res.target.response));
};
myRequest.send();

