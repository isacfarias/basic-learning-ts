interface Pessoa {
    idade: number;
    sexo?: string;//isso faz com quye a propriendade não seja obrigatoria
}




function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

let juseAlfredo = {nome: "Jusé Alfredo"};
// imprimirIdade(carlosAlberto);não compila

let carlosAlberto = {nome: "Carlos Alberto", idade: 21};
imprimirIdade(carlosAlberto);

let andre = {nome: "André", idade: 25, sexo: 'M'};
imprimirIdade(andre);