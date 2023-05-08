const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

const linhas = input.trim().split('\n');
const n = linhas[0];
const coordenadas = [];
let maiorDistancia = 0;
    
for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(' ');
    coordenadas.push({x: parseFloat(coord[0]), y: parseFloat(coord[1])});
}
for (let i = 0; i < coordenadas.length; i++) {
    for (let j = i + 1; j < coordenadas.length; j++) {
        const distancia = Math.sqrt(Math.pow((coordenadas[j].x - coordenadas[i].x), 2) + Math.pow((coordenadas[j].y - coordenadas[i].y), 2));
        if (distancia > maiorDistancia) {
            maiorDistancia = distancia;
        }
    }
}
console.log(maiorDistancia);