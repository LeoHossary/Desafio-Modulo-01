const jogadores = [
  { nome: 'Herman', jogada: 0 },
  { nome: 'Rhodes', jogada: 1 },
  { nome: 'Beach', jogada: 1 },
  { nome: 'Laurel', jogada: 1 },
  { nome: 'Beatrice', jogada: 1 },
  { nome: 'Alison', jogada: 1 },
  { nome: 'Saundra', jogada: 1 },
  { nome: 'Klein', jogada: 1 }
];

const jogadas1 = jogadores.filter((jogador) => {
  return jogador.jogada === 1;
});

const jogadas0 = jogadores.filter((jogador) => {
  return jogador.jogada === 0;
});

if (jogadas1.length === 1) {
  console.log(jogadas1[0].nome);
} else if (jogadas0.length === 1) {
  console.log(jogadas0[0].nome);
} else {
  console.log('NINGUEM');
};