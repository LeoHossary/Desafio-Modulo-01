const texto = ' !!!!!!!!!!! Cuidado,  , pois usuarios as vezes. deixam espacos vazios? no fim do texto sem querer ';

let textoFormatado = texto.replaceAll('!', '');
textoFormatado = textoFormatado.replaceAll('.', '');
textoFormatado = textoFormatado.replaceAll(',', '');
textoFormatado = textoFormatado.replaceAll('?', '');

const arrayTexto = textoFormatado.trim().split(" ");

let contador = 0;

for (let palavra of arrayTexto) {
    if (palavra !== '') {
        contador++;
    }
};
console.log(contador);
