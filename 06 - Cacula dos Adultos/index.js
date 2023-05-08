const lista = [18, 25, 32, 65, 34, 19, 13, 16];

let menorAdulto = Number.MAX_VALUE;

for (let idade of lista) {
    if (idade >= 18) {
        if (idade < menorAdulto) {
            menorAdulto = idade;
        }
    }
};
menorAdulto === Number.MAX_VALUE ? console.log('CRESCA E APARECA') : console.log(menorAdulto);

if (indices.length !== senha.length) {
    console.log('NAO');
} else if (indices === teste) {
    console.log('SIM');
} else {
    console.log('NAO');
} 