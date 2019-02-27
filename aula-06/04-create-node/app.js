function add(){
  let entrada = document.getElementById('entrada');
  let lista = document.getElementById('lista');
  
  let p = document.createElement("P");                       // Create a <p> element
  let t = document.createTextNode(entrada.value);       // Create a text node
  p.appendChild(t);                                          // Append the text to <p>
  lista.appendChild(p);
}