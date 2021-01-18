//é usar a crase para escrever a string, sem ser necessario o uso de concatenção com sinais de +
const precos = ['10', '20', '19', '25', '30'];
const valoresMaiorOuIgualaVinte = precos
.filter(preco => preco >= 20)
.map(preco => `Valores acima ou igual a R$ 20,00 reais, R$ ${preco},00`);
console.log(valoresMaiorOuIgualaVinte);