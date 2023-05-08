const  input = "cubos\ncuggbyos"

const palavras = input.trim().split('\n');
const senha = palavras[0].split('');
const digitos = palavras[1].split('');
   
let indiceSenha = 0;
let indiceDigitos = 0;
    
while (indiceSenha < senha.length && indiceDigitos < digitos.length) {
    if (senha[indiceSenha] === digitos[indiceDigitos]) {
        indiceSenha++;
        indiceDigitos++;
    } else {
        indiceDigitos++;
    }
}
    
if (indiceSenha === senha.length) {
    console.log('SIM');
} else {
    console.log('NAO');
};