//boolean
let estaPago: boolean = true;

//number
let idade: number = 31;
let valor: number = 15.75;

//string
let cahorro: string = "Ted";

// templete String
let nome: string = "Alonso";
console.log(`Olá, sou o ${nome} tenho ${idade} anos.`);


//arrays
let arrays: number[] = [7, 8, 10, 5];

// tuple
let alunos: [string, number, string] = ['Asdrubaldo', 7, 'Literatura'];
console.log(alunos);

//enum
enum Cor {Verde, Amarelo, Azul, Vermelho};
let corFundo: Cor = Cor.Verde;

//any, ideal para biblioteca de terceiro, migração de Js para Ts, array com varios tipos de dados
let semValorDefinido: any = 3;
semValorDefinido = "virou string";
semValorDefinido = true;

// void, não retorna nada
function alert(): void {
    // alert(peração não permitda);
}


//null e undefined -> são subtipos dos demais tipos
let u: undefined = undefined;
let n: null = null;

//serve para limpar o valor da varialvel
nome = undefined;