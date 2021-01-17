function imprimirIdade(pessoa) {
    console.log(pessoa.idade);
}
var juseAlfredo = { nome: "Jusé Alfredo" };
// imprimirIdade(carlosAlberto);não compila
var carlosAlberto = { nome: "Carlos Alberto", idade: 21 };
imprimirIdade(carlosAlberto);
var andre = { nome: "André", idade: 25, sexo: 'M' };
imprimirIdade(andre);
