function add(){
  let entrada = document.getElementById('entrada');
  let lista = document.getElementById('lista');
  
  let p = document.createElement("P");                       // Create a <p> element
  let t = document.createTextNode(entrada.value);       // Create a text node
  p.appendChild(t);                                          // Append the text to <p>
  lista.appendChild(p);
}

function salvar() {
  
  let storage = window.localStorage;
  let l = extrairLista();
  storage.setItem('lista', l); 
  
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

let storage = window.localStorage;
let l = storage.getItem('lista');
if(l) {
  l = l.split(',');
  inserirLista(l);
}
