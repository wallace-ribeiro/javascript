 
function Circulo(raio) {
  this.raio = raio;
  this.pi = 3.14;
  this.getArea =  function() {
    return this.pi * this.raio * this.raio;
  }
}

var a = new Circulo(5);
console.log(a.getArea());
console.log(a.raio);
console.log(a.pi);


function Circulo2(raio) {
  this.raio = raio;
  const piSymbol = Symbol();
  this[piSymbol] = 3.14;
  this.getArea =  function() {
    return this[piSymbol] * this.raio * this.raio;
  }
}

a = new Circulo2(5);
console.log(a.getArea());
console.log(a.raio);
console.log(a.pi);