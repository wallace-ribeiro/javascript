
// função simples
var nomePet = function(nome) {
  return nome;
}

console.log(`Nome do pet: ${nomePet("Agatha")}`);
console.log(`Nome do pet: ${nomePet("Vivie")}`);
console.log(`Nome do pet: ${nomePet("Vivie")}`);


// função usando closures
var pet = function(nome) {
  // A função externa define uma variável "nome"
    var getNome = function() {
  // A função interna tem acesso à variável "nome"  da função externa
      return nome;
    }
  //Retorna a função interna, expondo-a assim para escopos externos
    return getNome;
};

myPet = pet("Vivie");
  
console.log(`Nome do pet: ${myPet()}`); // Retorna "Vivie"
console.log(`Nome do pet: ${myPet()}`); 
console.log(`Nome do pet: ${myPet()}`); 
console.log(`Nome do pet: ${myPet()}`); 
