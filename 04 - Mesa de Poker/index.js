const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];

let permitidos = [];

for (let valor of valores) {
    if (valor >= min && valor <= max) {
        permitidos.push(valor);
    } 
};

console.log(permitidos);