var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.show = function () {
        return "Ol\u00E1, eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
// let jose: Cliente = new Cliente();
var jose = new Cliente("jose", 39);
// console.log(jose);
console.log(jose.show());
var gerson = new Cliente("gerson", 45);
// console.log(jose);
console.log(gerson.show());
