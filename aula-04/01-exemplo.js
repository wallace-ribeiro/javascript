var str = " Uma frase está aqui. Outra frase está ali " ;
var s2 = str.trim();
window.alert(str);
window.alert(s2);
window.alert(str.startsWith("Uma"));
window.alert(s2.startsWith("Uma"));
var s3 = s2.split(".");
for (var i = 0; i < s3.length; i++) {
    window.alert(s3[i]);
}
window.alert(s2.indexOf("frase"));
window.alert(s2.lastIndexOf("frase"));

window.alert(s2.substring(10,16));
window.alert(s2.substr(10,16));
window.alert(s2.toLowerCase());
window.alert(s2.toUpperCase());

var s = "";
s = s.concat(s3[0], s3[1]);
window.alert(s);

s = "";
s = s.concat(s3[0], ".", s3[1]);
window.alert(s);

s = s3[0] +"."+ s3[1];

window.alert(s);

s = `${s3[0]}.${s3[1]}`;

window.alert(s);

var a = 3;
var b = "5";

var c = a + b;

window.alert(c);
