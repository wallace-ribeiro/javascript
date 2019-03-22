const user = {
  nome: 'Gabriel',
  usuario: 'gabriel',
  idade: '27'
};

const newUser = { ...user, usuario: 'gbrobot' };

console.log(newUser); 
