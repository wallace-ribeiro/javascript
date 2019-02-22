let demo = document.getElementById('demo');
console.log(demo);
function atualizar(){
  let entrada = document.getElementById('entrada');
  let demo = document.getElementById('demo');
  demo.innerHTML = entrada.value;
  console.log('entrada: ',entrada.value);
}