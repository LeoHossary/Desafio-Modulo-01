const min = 25;
const km = 11.5;

//inicialmente são 50 cents por min e 70 cents por km
//depois de 10km, cada km custa 50 cents
//depois de 20min, cada min custa 30 cents.

const valorDistancia = (km > 10) ? ((70 * 10) + (km - 10) * 50) : (km * 70);

const valorTempo = (min > 20) ? ((50 * 20) + (min - 20) * 30) : (min * 50);

const valorTotal = valorDistancia + valorTempo;

console.log(valorTotal);