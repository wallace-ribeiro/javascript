
var retangulo = {};
retangulo.a = 2.3;
retangulo.b = 2.4;

window.alert(retangulo);

var str = JSON.stringify(retangulo);


window.alert(str);


window.alert("for in no objeto");
for (variavel in retangulo) {
    window.alert(variavel);
    window.alert(retangulo[variavel]);
}

var arr = [2, 4, 1, 7, 9];
window.alert("for in no array");
for (variavel in arr) {
    window.alert(variavel);
    window.alert(arr[variavel]);
}


window.alert("for of no array");
for (variavel of arr) {
    window.alert(variavel);
}


window.alert("forEach no array");
arr.forEach(function(variavel) {
  window.alert(variavel);
});