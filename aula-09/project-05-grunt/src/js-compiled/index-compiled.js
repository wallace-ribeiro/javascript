'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var user = {
  nome: 'Gabriel',
  usuario: 'gabriel',
  idade: '27'
};

var newUser = _extends({}, user, { usuario: 'gbrobot' });

console.log(newUser);
//# sourceMappingURL=index-compiled.js.map
