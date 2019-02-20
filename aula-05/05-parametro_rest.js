
function multiplicar(...args) {
    var m = 1;
    for(var i = 0; i < args.length; i++) {
      m = m * args[i];
    }
    return m;
} 


var a = multiplicar(2);
console.log(`a: ${a}`)
a = multiplicar(2, 3);
console.log(`a: ${a}`)
a = multiplicar(2, 3, 5);
console.log(`a: ${a}`)
a = multiplicar(2, 3, 5, 2);
console.log(`a: ${a}`)
a = multiplicar(2, 3, 5, 2, 6);
console.log(`a: ${a}`)
a = multiplicar(2, 3, 5, 2, 6, 8);
console.log(`a: ${a}`)



function multiplicarESomar2Numeros(num1, num2, ...args) {
    var m = 1;
    for(var i = 0; i < args.length; i++) {
      m = m * args[i];
    }
    return m + num1 + num2;
}

a = multiplicarESomar2Numeros(2, 3, 5);
console.log(`a: ${a}`)
a = multiplicarESomar2Numeros(2, 3, 5, 2);
console.log(`a: ${a}`)
a = multiplicarESomar2Numeros(2, 3, 5, 2, 6);
console.log(`a: ${a}`)
a = multiplicarESomar2Numeros(2, 3, 5, 2, 6, 8);
console.log(`a: ${a}`)