const numeros = [1, 3, 2, 1];

let posicao = 0;
let contador = 1;

const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

while (contador <= soma) {
    contador++;
    if (posicao === numeros.length) {
        posicao = 1;
    } else {
        posicao++;
    }
};
console.log(posicao);