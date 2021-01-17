var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 7.5; }
        console.log("Pagando " + this.salario * taxa / 100 + " reais de imposto");
    };
    return Funcionario;
}());
var Secretario = /** @class */ (function (_super) {
    __extends(Secretario, _super);
    function Secretario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Secretario;
}(Funcionario));
var Executivo = /** @class */ (function (_super) {
    __extends(Executivo, _super);
    function Executivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Executivo.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 27.5; }
        console.log("Executivo, pagando " + this.salario * taxa / 100 + " reais de imposto");
    };
    return Executivo;
}(Funcionario));
var maria = new Secretario("Maria", 1800);
maria.pagarImposto();
var adalgiza = new Executivo("Adalgiza", 30800);
adalgiza.pagarImposto();
