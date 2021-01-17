class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number = 7.5) {
        console.log(`Pagando ${this.salario * taxa / 100} reais de imposto`);
    }
}

class Secretario extends Funcionario {
}

class Executivo extends Funcionario {

    pagarImposto(taxa: number = 27.5) {
        console.log(`Executivo, pagando ${this.salario * taxa / 100} reais de imposto`);
    }
}

let maria = new Secretario("Maria", 1800);
maria.pagarImposto();

let adalgiza = new Executivo("Adalgiza", 30800);
adalgiza.pagarImposto();