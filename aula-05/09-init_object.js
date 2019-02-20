 var obj = {
   marca: 'Chevrolet',
   modelo: 'Classic',
   ano: 1996,
}; 

console.log(obj);

function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}


obj = new Carro('Ford', 'Focus', 2014);

console.log(obj);

var Animal = {
    tipo: "Invertebrados", 
    qualTipo : function() {
      console.log(this.tipo);
    }
};

var animal = Object.create(Animal);
Animal.qualTipo();
animal.qualTipo();
animal.tipo = "Ave";
Animal.qualTipo();
animal.qualTipo();



