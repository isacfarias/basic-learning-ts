class Cliente {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    show() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}
// let jose: Cliente = new Cliente();
let jose = new Cliente("jose", 39);
// console.log(jose);
console.log(jose.show());

let gerson = new Cliente("gerson", 45);
// console.log(jose);
console.log(gerson.show());