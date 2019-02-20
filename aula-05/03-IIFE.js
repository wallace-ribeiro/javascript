var horas = 15;
//
var cumprimentar = function (horaDoDia) {
    let saudacao = "Tudo bem";
    if (horaDoDia) {
        if( horaDoDia < 12 ){
            saudacao = "Bom dia";
        } else if ( horaDoDia < 18 ){
          saudacao = "Boa tarde";
        } else {
          saudacao = "Boa noite";
        }
    }
    return function () {
      console.log(`Oi vizinho, ${saudacao}`);
    };
}

var cumprimento = cumprimentar();
cumprimento();
// as duas linhas acima podem ser simplificadas da sequinte maneira:
cumprimentar()();
cumprimentar(7)();
cumprimentar(13)();
cumprimentar(21)();

cumprimentar = (function (horaDoDia) {
    let saudação = "Tudo bem";
    if( horaDoDia < 12 ){
      saudação = "Bom dia";
    } else if ( horaDoDia < 18 ){
      saudação = "Boa tarde";
    } else {
      saudação = "Boa noite";
    }
    return function () {
      console.log(`Oi vizinho, ${saudação}`);
    };
})(horas);

cumprimentar();