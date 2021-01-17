//mesmo quando não informado explicitamente o tipo, ele é atribuido com base no valor passado

let quilo: number = 1.250;
// quilo = " sobremesa"; isso não compila

let jarra = [1, 2, null];
// jarra[0] = "agua"; não compila

//contextual typing
window.onmousedown = function(evento) {
    console.log(evento.button);//ok
    // console.log(event.buton);não compila
}
