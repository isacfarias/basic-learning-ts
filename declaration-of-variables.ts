//var, let, const
//var, devido ao hoisting do js, as variaveis var são acessivei fora do escopo que foram declaradas;
function iniciarTarefa(iniciar: boolean) {
    var tarefa: string = "Estudar typeScript";

    if (iniciar) {
        var academia: string = "AlgaWorks";
    }

    console.log(`${tarefa} na ${academia}`);
}
iniciarTarefa(true);

//LET, tem a garantia que só é vista dentro do escopo que foi declarada é mutavel
function iniciarProjeto(iniciar: boolean) {
    let tarefa,
        aVontadeEstaComo: string; 

        tarefa = "Hora de codar em typeScript,";

    if (iniciar) {
        aVontadeEstaComo = "birrrr, vai mostro, arregaça!!!";
    } else {
        aVontadeEstaComo = "agora não meu mosquita de estimação ta com febre.";
    }

    console.log(`${tarefa} ${aVontadeEstaComo}`);
}

iniciarProjeto(false);

//CONST, como o proprio nome sugere é uma contante imutavel;
function iniciarAnalise(iniciar: boolean) {
    
    const tarefa: string = "Hora de analisar as diferenças entre const, let e var.";
    let   assuntoCompreendido: string; 

    if (iniciar) {
        assuntoCompreendido = "Ohhhh, agora serei um novo programador, não meterei mas var pra todo lado :D.";
    } else {
        assuntoCompreendido = "Tem problema eu usar var por ser generico :{ .";
    }

    // tarefa = "bora mete o loco"; isso não funciona numa const

    console.log(`${tarefa} ${assuntoCompreendido}`);
};
iniciarAnalise(true);
