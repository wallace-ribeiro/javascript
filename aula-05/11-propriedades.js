function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}



obj = new Carro('Ford', 'Focus', 2014);

console.log(obj);
console.log(obj.getDescricao);

Carro.prototype.getDescricao = function() {
  return `${this.marca} - ${this.modelo}`;
}

console.log(obj.getDescricao);
console.log(obj.getDescricao()); 

delete obj.ano;
console.log(obj);
console.log(obj.getDescricao()); 
delete obj.modelo;
console.log(obj.getDescricao());


var o1 = {a: 'texto'};
var o2 = {a: 'texto'};

if(o1 == o2) {
  console.log('Objetos iguais');
} else {
  console.log('Objetos diferentes');
}
