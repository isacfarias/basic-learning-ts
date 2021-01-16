//var, let, const
//var, devido ao hoisting do js, as variaveis var são acessivei fora do escopo que foram declaradas;
function iniciarTarefa(iniciar) {
    var tarefa = "Estudar typeScript";
    if (iniciar) {
        var academia = "AlgaWorks";
    }
    console.log(tarefa + " na " + academia);
}
iniciarTarefa(true);
//LET, tem a garantia que só é vista dentro do escopo que foi declarada é mutavel
function iniciarProjeto(iniciar) {
    var tarefa, aVontadeEstaComo;
    tarefa = "Hora de codar em typeScript,";
    if (iniciar) {
        aVontadeEstaComo = "birrrr, vai mostro, arregaça!!!";
    }
    else {
        aVontadeEstaComo = "agora não meu mosquita de estimação ta com febre.";
    }
    console.log(tarefa + " " + aVontadeEstaComo);
}
iniciarProjeto(false);
//CONST, como o proprio nome sugere é uma contante imutavel;
function iniciarAnalise(iniciar) {
    var tarefa = "Hora de analisar as diferenças entre const, let e var.";
    var assuntoCompreendido;
    if (iniciar) {
        assuntoCompreendido = "Ohhhh, agora serei um novo programador, não meterei mas var pra todo lado :D.";
    }
    else {
        assuntoCompreendido = "Tem problema eu usar var por ser generico :{ .";
    }
    // tarefa = "bora mete o loco"; isso não funciona numa const
    console.log(tarefa + " " + assuntoCompreendido);
}
;
iniciarAnalise(true);
