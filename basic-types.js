//boolean
var estaPago = true;
//number
var idade = 31;
var valor = 15.75;
//string
var cahorro = "Ted";
// templete String
var nome = "Alonso";
console.log("Ol\u00E1, sou o " + nome + " tenho " + idade + " anos.");
//arrays
var arrays = [7, 8, 10, 5];
// tuple
var alunos = ['Asdrubaldo', 7, 'Literatura'];
console.log(alunos);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Vermelho"] = 3] = "Vermelho";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//any, ideal para biblioteca de terceiro, migração de Js para Ts, array com varios tipos de dados
var semValorDefinido = 3;
semValorDefinido = "virou string";
semValorDefinido = true;
// void, não retorna nada
function alert() {
    // alert(peração não permitda);
}
//null e undefined -> são subtipos dos demais tipos
var u = undefined;
var n = null;
//serve para limpar o valor da varialvel
nome = undefined;
