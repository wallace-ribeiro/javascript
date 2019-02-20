var idade = 18;

// usando if
var frase;
if(idade >= 18) {
  frase = "Maior de idade";
} else {
  frase = "Menor de idade";
}

console.log(frase)


// usando ternário
frase = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(frase);

