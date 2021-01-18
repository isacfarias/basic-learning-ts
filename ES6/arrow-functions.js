const precos = ['10', '20', '19', '25', '30'];

//modelo tradicional
// var precoBRL = precos.map(function (preco) {
//     return 'R$ ' + preco + ',00';
// });
// console.log(precoBRL);

//moderno
// var precoBrl = precos.map((preco) => {
//     return 'R$ ' + preco + ',00';
// });
// console.log(precoBrl);

//uma limpada
const precoBrasil = precos.map(preco => 'R$ ' + preco + ',00');
console.log(precoBrasil);

// const valoresMaiorQueVinte = precos.filter(preco => preco >= 20);
// console.log('Somente valores maior ou igual a 20: ['+ valoresMaiorQueVinte+']');


const valoresMaiorOuIgualaVinte = precos
.filter(preco => preco >= 20)
.map(preco => 'R$ ' + preco + ',00');
console.log(valoresMaiorOuIgualaVinte);