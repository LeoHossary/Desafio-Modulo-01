const precos = [150, 50];

function totalAPagar(lista) {
    lista.sort((primeiro, segundo) => {
        return primeiro - segundo;
    });
    const soma = lista.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    });
    if (lista.length >= 3) {
        const menorValor = lista[0];
        console.log(soma - menorValor/2);
    } else {
        console.log(soma);
    }
};
totalAPagar(precos);