const lista = [1, 2, 3, 4, 5, 6];

const somatorio = lista.reduce((soma, valorAtual) => {
    return soma + valorAtual;
});

const media = somatorio / lista.length;

console.log(media);
